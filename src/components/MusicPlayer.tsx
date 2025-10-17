import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

interface Track {
  title: string;
  artist: string;
  duration: string;
  audioUrl: string;
}

interface MusicPlayerProps {
  tracks: Track[];
}

export const MusicPlayer = ({ tracks }: MusicPlayerProps) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handlePrevious = () => {
    setCurrentTrack((prev) => (prev > 0 ? prev - 1 : tracks.length - 1));
    setIsPlaying(false);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev < tracks.length - 1 ? prev + 1 : 0));
    setIsPlaying(false);
    setProgress(0);
  };

  const handleProgressChange = (value: number[]) => {
    const newProgress = value[0];
    setProgress(newProgress);
    if (audioRef.current) {
      audioRef.current.currentTime = (audioRef.current.duration * newProgress) / 100;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      const currentProgress = (audio.currentTime / audio.duration) * 100;
      setProgress(currentProgress || 0);
    };

    const handleEnded = () => {
      handleNext();
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack]);

  const track = tracks[currentTrack];

  return (
    <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
      <div className="space-y-6">
        {/* Album Art */}
        <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          <div className="text-6xl">🎵</div>
        </div>

        {/* Track Info */}
        <div className="text-center space-y-1">
          <h3 className="font-semibold text-lg">{track.title}</h3>
          <p className="text-sm text-muted-foreground">{track.artist}</p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <Slider
            value={[progress]}
            onValueChange={handleProgressChange}
            max={100}
            step={0.1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0:00</span>
            <span>{track.duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <Button
            size="icon"
            variant="ghost"
            onClick={handlePrevious}
            className="h-10 w-10"
          >
            <SkipBack className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            onClick={handlePlayPause}
            className="h-14 w-14 rounded-full"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-1" />
            )}
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={handleNext}
            className="h-10 w-10"
          >
            <SkipForward className="w-5 h-5" />
          </Button>
        </div>

        {/* Playlist */}
        <div className="text-center text-xs text-muted-foreground">
          Track {currentTrack + 1} of {tracks.length}
        </div>
      </div>

      <audio ref={audioRef} src={track.audioUrl} />
    </Card>
  );
};
