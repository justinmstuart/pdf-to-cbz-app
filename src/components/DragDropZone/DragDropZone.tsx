import { FC, ReactNode } from 'react';
import ParagraphText, {
  ParagraphVariant,
} from '../ParagraphText/ParagraphText';
import { Button } from '../Button';

export interface DragDropZoneProps {
  isDragging: boolean;
  loading: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onClick: () => void;
  icon?: ReactNode;
  loadingText?: string;
  dragText?: string;
  defaultText?: string;
  helperText?: string;
  buttonLabel?: string;
}

const DragDropZone: FC<DragDropZoneProps> = ({
  isDragging,
  loading,
  onDragOver,
  onDragLeave,
  onDrop,
  onClick,
  icon,
  loadingText = 'Processing...',
  dragText = 'Drop your file here!',
  defaultText = 'Drop file here or click to browse',
  helperText = 'Supports PDF files only',
  buttonLabel = 'Select PDF File',
}) => {
  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onClick={!loading ? onClick : undefined}
      className={`
        w-full max-w-2xl min-h-[240px] border-4 border-dashed rounded-xl
        flex flex-col items-center justify-center gap-6 p-8
        transition-all duration-300 cursor-pointer
        ${
          isDragging
            ? 'border-secondary bg-secondary/10 shadow-[0_0_50px_var(--color-primary-glow)]'
            : 'border-primary/40 bg-background/50 hover:border-primary/70 hover:bg-background/80 hover:shadow-[0_0_40px_var(--color-primary-glow)]'
        }
      `}
    >
      {loading ? (
        <>
          {icon}
          <ParagraphText variant={ParagraphVariant.Accent}>
            {loadingText}
          </ParagraphText>
        </>
      ) : (
        <>
          <div className="text-center space-y-3">
            <ParagraphText variant={ParagraphVariant.Large}>
              {isDragging ? dragText : defaultText}
            </ParagraphText>
            <ParagraphText variant={ParagraphVariant.Small}>
              {helperText}
            </ParagraphText>
          </div>
          <Button type="button" disabled={loading} label={buttonLabel} />
        </>
      )}
    </div>
  );
};

export default DragDropZone;
