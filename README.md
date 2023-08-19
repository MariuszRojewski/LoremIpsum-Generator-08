## Lorem Ipsum Text Generator

## Jak działa program?

Jest to aplikacja, która generuje tekst Lorem Ipsum na podstawie liczby akapitów wprowadzonych przez użytkownika.

Komponent ten korzysta z hooka useState z biblioteki React, aby przechowywać stan liczby akapitów (count) i wygenerowanego tekstu (text). Wartość początkowa dla count to 1, a dla text pusta tablica.

Funkcja handleSubmit jest wywoływana, gdy użytkownik naciska przycisk “Generate”. Zapobiega ona domyślnemu zachowaniu formularza i aktualizuje stan text, ustawiając go na odpowiednią liczbę akapitów z tablicy danych zaimportowanej z pliku ./data.

W sekcji JSX komponentu znajduje się formularz, w którym użytkownik może wprowadzić liczbę akapitów, które chce wygenerować. Formularz ten zawiera etykietę, pole tekstowe i przycisk do wysłania formularza. Po wysłaniu formularza wywoływana jest funkcja handleSubmit.

Poniżej formularza znajduje się element article, który wyświetla wygenerowany tekst. Tekst ten jest mapowany na elementy p, a każdy z nich otrzymuje unikalny klucz za pomocą funkcji nanoid z biblioteki nanoid.
