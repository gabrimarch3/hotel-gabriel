import { NextResponse } from 'next/server';
import Stripe from 'stripe';

import { createBooking, updateHotelRoom } from '@/libs/apis';

const checkout_session_completed = 'checkout.session.completed';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2023-08-16',
});

export async function POST(req: Request, res: Response) {
  const reqBody = await req.text();
  const sig = req.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event: Stripe.Event;

  try {
    if (!sig || !webhookSecret) return;
    event = stripe.webhooks.constructEvent(reqBody, sig, webhookSecret);
  } catch (error: any) {
    console.error('Webhook Error:', error);
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 500 });
  }

  // Log dell'evento
  console.log('Received Stripe Event:', event);

  // Carica l'evento
  switch (event.type) {
    case checkout_session_completed:
      const session = event.data.object;

      const {
        // @ts-ignore
        metadata: {
          adults,
          checkinDate,
          checkoutDate,
          children,
          hotelRoom,
          numberOfDays,
          user,
          discount,
          totalPrice,
        },
      } = session;

      try {
        // Crea la prenotazione
        await createBooking({
          adults: Number(adults),
          checkinDate,
          checkoutDate,
          children: Number(children),
          hotelRoom,
          numberOfDays: Number(numberOfDays),
          discount: Number(discount),
          totalPrice: Number(totalPrice),
          user,
        });

        // Aggiorna la stanza dell'hotel
        await updateHotelRoom(hotelRoom);

        console.log('Booking and room update successful');
        
        return NextResponse.json('Booking successful', {
          status: 200,
          statusText: 'Booking Successful',
        });
      } catch (bookingError) {
        console.error('Error creating booking or updating room:', bookingError);
        return new NextResponse(`Error processing booking:`, { status: 500 });
      }

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json('Event Received', {
    status: 200,
    statusText: 'Event Received',
  });
}