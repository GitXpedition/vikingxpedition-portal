'use client';

import Image from 'next/image';
import '../i18n';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

// Creamos un componente "hijo" para contener el texto.
// Esto ayuda a Next.js a aislar la parte que cambia.
const TranslatedText = ({ translationKey }: { translationKey: string }) => {
  const { t } = useTranslation();
  return <>{t(translationKey)}</>;
};

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Durante el renderizado del servidor y la primera carga, no mostramos el texto.
  if (!isMounted) {
    // Puedes retornar un 'esqueleto' o 'spinner' de carga aquí si quieres,
    // o simplemente nada para que no haya conflicto.
    return null; 
  }

  // Una vez que la página está "viva" en el navegador, mostramos el contenido completo.
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <TranslatedText translationKey="page_status" />&nbsp;
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="flex place-items-center gap-2 p-8 lg:p-0">
            <TranslatedText translationKey="attribution_by" />{' '}
            <Image
              src="/catalogic_isologo.png"
              alt="Logo inferior"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative"
          src="/catalogosDirectosHD2.png"
          alt="Logo superior"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <TranslatedText translationKey="pillar1_title" />{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <TranslatedText translationKey="pillar1_subtitle" />
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <TranslatedText translationKey="pillar2_title" />{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <TranslatedText translationKey="pillar2_subtitle" />
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <TranslatedText translationKey="pillar3_title" />{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <TranslatedText translationKey="pillar3_subtitle" />
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <TranslatedText translationKey="pillar4_title" />{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            <TranslatedText translationKey="pillar4_subtitle" />
          </p>
        </div>
      </div>
    </main>
  );
}