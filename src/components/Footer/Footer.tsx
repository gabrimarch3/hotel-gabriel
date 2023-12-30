import Link from 'next/link';
import { BsFillSendFill, BsTelephoneOutbound } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className='mt-16'>
      <div className='container mx-auto px-4'>
        <Link href='/' className='font-black text-tertiary-dark'>
          Hotelzz
        </Link>

        <h4 className='font-semibold text-[40px] py-6'>Contatti</h4>

        <div className='flex flex-wrap gap-16 items-center justify-between'>
          <div className='flex-1'>
            <p>Via Manara 3/A</p>
            <div className='flex items-center py-4'>
              <BsFillSendFill />
              <p className='ml-2'>Creato da Gabrimarch3</p>
            </div>
            <div className='flex items-center'>
              <BsTelephoneOutbound />
              <p className='ml-2'>+393420800314</p>
            </div>
            <div className='flex items-center pt-4'>
              <BiMessageDetail />
              <p className='ml-2'>gabrimarche@protonmail.com</p>
            </div>
          </div>

          <div className='flex-1 md:text-right'>
            <p className='pb-4'>La nostra storia</p>
            <p className='pb-4'>Contattaci</p>
            <p className='pb-4'>Ci teniamo alla privacy</p>
            <p className='pb-4'>Termini di servizio</p>
            <p>Assistenza clienti</p>
          </div>

          <div className='flex-1 md:text-right'>
            <p className='pb-4'>Esperienza gastronomica</p>
            <p className='pb-4'>Benessere</p>
            <p className='pb-4'>Fitness</p>
            <p className='pb-4'>Sport</p>
            <p>Eventi</p>
          </div>
        </div>
      </div>

      <div className='bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0' />
    </footer>
  );
};

export default Footer;
