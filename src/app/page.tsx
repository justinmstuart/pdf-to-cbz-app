'use client';

import React, { FC, useRef, useState } from 'react';
import Spinner from '../components/Spinner/Spinner';
import HeaderText, { HeaderType } from '@/components/HeaderText/HeaderText';
import ParagraphText from '@/components/ParagraphText/ParagraphText';
import { Button } from '@/components/Button';

const Home: FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setLoading(true);
    }
  };

  return (
    <main className="min-h-screen max-w-3xl mx-auto px-4 py-15 flex flex-col">
      <header className="mb-2">
        <HeaderText type={HeaderType.H1}>{'PDF -> CBZ'}</HeaderText>
      </header>
      <section className="flex flex-col gap-10 items-center justify-center flex-grow">
        <ParagraphText>
          Choose a PDF file and convert it into a CBZ archive in one click.
          Learn more about the script that does the conversion{' '}
          <a
            href="https://github.com/justinmstuart/python-utils/blob/main/pdf_to_cbz/README.md"
            className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300 transition-colors"
          >
            here
          </a>
          .
        </ParagraphText>
        <div className="flex items-center min-h-[56px]">
          {loading ? (
            <Spinner />
          ) : (
            <Button
              type="button"
              onClick={openFilePicker}
              disabled={loading}
              label="Convert"
            />
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          aria-label="PDF files"
          accept="application/pdf"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </section>
      <footer className="mt-8 pt-4 text-center">
        <a
          href="https://github.com/your-repo"
          className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300 transition-colors"
        >
          Github
        </a>
      </footer>
    </main>
  );
};

export default Home;
