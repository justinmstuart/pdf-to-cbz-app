'use client';

import React, { FC, useRef, useState } from 'react';
import Spinner from '../components/Spinner/Spinner';
import ParagraphText from '@/components/ParagraphText/ParagraphText';
import DragDropZone from '@/components/DragDropZone';
import FeatureCard from '@/components/FeatureCard';
import Panel, { PanelVariant } from '@/components/Panel';
import PageHeader from '@/components/PageHeader';
import PageFooter from '@/components/PageFooter';
import usePdfToCbzConverter from '@/hooks/usePdfToCbzConverter';

const Home: FC = () => {
  const { isLoading, handleFile } = usePdfToCbzConverter();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
      // Reset input so the same file can be selected again
      e.target.value = '';
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0 && files[0].type === 'application/pdf') {
      handleFile(files[0]);
    }
  };

  return (
    <main className="min-h-screen max-w-4xl mx-auto px-4 py-8 md:py-16 flex flex-col">
      <PageHeader title="PDF → CBZ" />

      <section className="flex flex-col gap-8 items-center justify-center flex-grow">
        <Panel variant={PanelVariant.Card}>
          <ParagraphText>
            <>
              Convert a PDF into a CBZ archive — a comic book-friendly format
              that, works with e-readers. Found a bug or have an idea? Pull
              requests and issues are always welcome.
            </>
          </ParagraphText>
        </Panel>

        <DragDropZone
          isDragging={isDragging}
          loading={isLoading}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={openFilePicker}
          icon={<Spinner />}
          loadingText="Converting your PDF..."
        />

        <input
          ref={fileInputRef}
          type="file"
          aria-label="PDF files"
          accept="application/pdf"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />

        <Panel variant={PanelVariant.Grid}>
          <FeatureCard
            icon="⚡"
            title="Fast"
            description="Local processing"
            borderColor="primary"
          />
          <FeatureCard
            icon="🔒"
            title="Private"
            description="No uploads"
            borderColor="secondary"
          />
          <FeatureCard
            icon="📖"
            title="Compatible"
            description="Works everywhere"
            borderColor="accent"
          />
        </Panel>
      </section>

      <PageFooter githubHref="https://github.com/your-repo" />
    </main>
  );
};

export default Home;
