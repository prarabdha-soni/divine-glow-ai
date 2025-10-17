import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Play, Pause, SkipBack, SkipForward, Volume2, Heart, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { useNavigate } from 'react-router-dom';

interface Track {
  title: string;
  artist: string;
  duration: string;
  audioUrl: string;
  imageUrl?: string;
}

const krishnaSongs: Track[] = [
  {
    title: "Shyama Bhajan",
    artist: "Sachet-Parampara",
    duration: "7:45",
    audioUrl: "/assets/shyama.mp3",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop&crop=center"
  }
];

const MusicPlayerPage = () => {
  const navigate = useNavigate();
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isLiked, setIsLiked] = useState(false);
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
    setCurrentTrack((prev) => (prev > 0 ? prev - 1 : krishnaSongs.length - 1));
    setIsPlaying(false);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev < krishnaSongs.length - 1 ? prev + 1 : 0));
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

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  const handleTrackSelect = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(false);
    setProgress(0);
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

  const track = krishnaSongs[currentTrack];

  return (
    <div className="min-h-screen divine-gradient pb-24">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card/80 backdrop-blur-lg border-b border-border z-20 px-6 py-4">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-semibold">Krishna Music</h1>
          </div>
        </div>

        <div className="px-6 pt-6 space-y-6">
          {/* Now Playing Card */}
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="space-y-6">
              {/* Album Art */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto w-64 h-64">
                <div className="text-8xl">🎵</div>
              </div>

              {/* Track Info */}
              <div className="text-center space-y-2">
                <h3 className="font-bold text-xl">{track.title}</h3>
                <p className="text-muted-foreground">{track.artist}</p>
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

              {/* Main Controls */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handlePrevious}
                  className="h-12 w-12"
                >
                  <SkipBack className="w-6 h-6" />
                </Button>
                <Button
                  size="icon"
                  onClick={handlePlayPause}
                  className="h-16 w-16 rounded-full bg-primary hover:bg-primary/90"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8" />
                  ) : (
                    <Play className="w-8 h-8 ml-1" />
                  )}
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleNext}
                  className="h-12 w-12"
                >
                  <SkipForward className="w-6 h-6" />
                </Button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center gap-3">
                <Volume2 className="w-4 h-4 text-muted-foreground" />
                <Slider
                  value={[volume]}
                  onValueChange={handleVolumeChange}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <span className="text-xs text-muted-foreground w-8">{volume}%</span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setIsLiked(!isLiked)}
                  className={isLiked ? "text-red-500" : ""}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                >
                  <Share className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>

        </div>
      </div>

      <audio ref={audioRef} src={track.audioUrl} />
    </div>
  );
};

export default MusicPlayerPage;
