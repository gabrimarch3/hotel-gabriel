# Piattaforma di Prenotazione Hotel gabrimarch3

un progetto avanzato sviluppato con Next.js, React, Sanity.io, Tailwind CSS e Stripe. Questa piattaforma offre un'esperienza utente intuitiva e completa per facilitare l'esplorazione, la prenotazione sicura e la gestione dei profili utente.

## Caratteristiche Principali

- **Esplora Stanze:** Accedi a una vasta selezione di stanze, ognuna con dettagli completi, descrizioni accattivanti e immagini ad alta risoluzione per aiutarti a fare scelte informate e soddisfare le tue esigenze di alloggio.

- **Prenotazioni Sicure:** La piattaforma integra il sistema di pagamento Stripe per garantire transazioni sicure e senza problemi. Puoi prenotare la tua stanza preferita in pochi clic, con la certezza di un processo di pagamento affidabile.

- **Gestione Profilo Utente:** Crea un profilo personalizzato, gestisci le tue prenotazioni e accedi facilmente allo storico delle transazioni. Aggiorna le tue informazioni personali in qualsiasi momento per garantire una esperienza personalizzata.

## Tecnologie Utilizzate

- **Next.js:** Framework React avanzato che offre un'esperienza di sviluppo veloce, con rendering lato server per prestazioni ottimali. Next.js semplifica la creazione di applicazioni web moderne e reattive.

- **React:** Libreria JavaScript per la costruzione di interfacce utente dinamiche e riutilizzabili. React offre una gestione dello stato efficace e un flusso di lavoro dichiarativo.

- **Sanity.io:** CMS headless progettato per una gestione del contenuto flessibile. Con Sanity.io è possibile modellare il proprio schema di dati e distribuire contenuti in modo dinamico.

- **Tailwind CSS:** Framework CSS utilizzato per progettare interfacce utente moderne e reattive. Con Tailwind, è possibile creare stili personalizzati in modo efficiente utilizzando classi predefinite.

- **Stripe:** Piattaforma di pagamento online che offre soluzioni sicure e flessibili per gestire transazioni finanziarie. L'integrazione di Stripe garantisce un processo di pagamento affidabile e sicuro.

## Istruzioni per l'Installazione su Windows

1. **Clona la Repository:**

    Apri PowerShell come amministratore:
    - Cerca "PowerShell" nel menu Start.
    - Fai clic con il tasto destro su "Windows PowerShell" e seleziona "Esegui come amministratore".

    Esegui il seguente comando:

    ```powershell
    git clone https://github.com/tuonome/hotel-booking.git
    ```

2. **Naviga nella Cartella del Progetto:**

    Esegui il seguente comando:

    ```powershell
    cd hotel-booking
    ```

3. **Installazione di Node.js:**

    Se Node.js non è già installato, scaricalo da [https://nodejs.org/it/](https://nodejs.org/it/) e segui il processo di installazione.

4. **Installazione delle Dipendenze:**

    Esegui il seguente comando per installare le dipendenze del progetto:

    ```powershell
    npm install
    ```

5. **Configurazione delle Variabili d'Ambiente:**

    - Nella cartella del progetto, crea un nuovo file chiamato `.env.local`.
    - Apri il file con un editor di testo e aggiungi le seguenti linee:

        ```env
        NEXT_PUBLIC_STRIPE_PUBLIC_KEY=la_tua_chiave_pubblica_stripe
        STRIPE_SECRET_KEY=la_tua_chiave_segreta_stripe
        SANITY_PROJECT_ID=il_tuo_id_progetto_sanity
        SANITY_DATASET=il_tuo_dataset_sanity
        ```

6. **Avvio dell'Applicazione:**

    Esegui il seguente comando per avviare l'applicazione:

    ```powershell
    npm run dev
    ```

7. **Accesso all'Applicazione:**

    Apri il tuo browser e vai all'indirizzo [http://localhost:3000](http://localhost:3000) per accedere all'applicazione.

## Contributi e Segnalazioni di Problemi

Accoglgo con piacere i contributi! Per problemi o suggerimenti, apri una nuova issue su GitHub.

## Contatti

Per ulteriori informazioni, contatta (mailto:gabrimarche@protonmail.com).
