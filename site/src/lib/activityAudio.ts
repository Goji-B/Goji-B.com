/** Shared voice, SFX, and optional background music for Activities World. */

export type SfxType =
	| 'pop'
	| 'boing'
	| 'sparkle'
	| 'wobble'
	| 'chime'
	| 'bonk'
	| 'flip'
	| 'match'
	| 'thud'
	| 'ding'
	| 'buzz'
	| 'clink'
	| 'tap'
	| 'fanfare'
	| 'draw'
	| 'fail'
	| 'pad0'
	| 'pad1'
	| 'pad2'
	| 'pad3'
	| 'blip'
	| 'success';

export type MusicTheme =
	| 'bouncy'
	| 'marimba'
	| 'quirky'
	| 'musicbox'
	| 'acoustic'
	| 'dreamy'
	| 'electronic'
	| 'explore'
	| 'playful';

const STORAGE_SOUND = 'goji-activity-sound';
const STORAGE_MUSIC = 'goji-activity-music';

class ActivityAudioManager {
	unlocked = false;
	soundOn = true;
	musicOn = false;
	private ctx: AudioContext | null = null;
	private musicTimer: ReturnType<typeof setInterval> | null = null;
	private musicStep = 0;
	private activeTheme: MusicTheme | null = null;

	constructor() {
		if (typeof sessionStorage !== 'undefined') {
			const s = sessionStorage.getItem(STORAGE_SOUND);
			const m = sessionStorage.getItem(STORAGE_MUSIC);
			if (s !== null) this.soundOn = s === '1';
			if (m !== null) this.musicOn = m === '1';
		}
	}

	unlock(): void {
		if (this.unlocked) return;
		this.unlocked = true;
		const ctx = this.getCtx();
		if (ctx?.state === 'suspended') void ctx.resume();
	}

	setSound(on: boolean): void {
		this.soundOn = on;
		sessionStorage.setItem(STORAGE_SOUND, on ? '1' : '0');
		if (!on) window.speechSynthesis?.cancel();
		this.dispatchChange();
	}

	setMusic(on: boolean): void {
		this.musicOn = on;
		sessionStorage.setItem(STORAGE_MUSIC, on ? '1' : '0');
		if (!on) this.stopMusic();
		else if (this.activeTheme) this.startMusic(this.activeTheme);
		this.dispatchChange();
	}

	speak(text: string): void {
		if (!this.unlocked || !this.soundOn || !text || !window.speechSynthesis) return;
		window.speechSynthesis.cancel();
		const utter = new SpeechSynthesisUtterance(text);
		utter.lang = 'en-US';
		utter.rate = 0.88;
		utter.pitch = 1.05;
		window.speechSynthesis.speak(utter);
	}

	playSfx(type: SfxType): void {
		if (!this.unlocked || !this.soundOn) return;
		const ctx = this.getCtx();
		if (!ctx) return;
		const t = ctx.currentTime;
		const g = ctx.createGain();
		g.connect(ctx.destination);

		const tone = (freq: number, dur: number, vol: number, wave: OscillatorType = 'sine') => {
			const o = ctx.createOscillator();
			o.type = wave;
			o.frequency.value = freq;
			const gn = ctx.createGain();
			gn.gain.setValueAtTime(vol, t);
			gn.gain.exponentialRampToValueAtTime(0.001, t + dur);
			o.connect(gn);
			gn.connect(g);
			o.start(t);
			o.stop(t + dur);
		};

		const noiseBurst = (dur: number, vol: number) => {
			const bufferSize = Math.floor(ctx.sampleRate * dur);
			const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
			const data = buffer.getChannelData(0);
			for (let i = 0; i < bufferSize; i += 1) data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
			const src = ctx.createBufferSource();
			src.buffer = buffer;
			const gn = ctx.createGain();
			gn.gain.value = vol;
			src.connect(gn);
			gn.connect(g);
			src.start(t);
		};

		switch (type) {
			case 'pop':
				tone(520, 0.08, 0.2, 'sine');
				break;
			case 'boing':
				tone(180, 0.22, 0.18, 'triangle');
				tone(320, 0.12, 0.1, 'sine');
				break;
			case 'sparkle':
				tone(880, 0.06, 0.12);
				tone(1100, 0.08, 0.1);
				tone(1320, 0.1, 0.08);
				break;
			case 'wobble':
				tone(140, 0.15, 0.14, 'sawtooth');
				break;
			case 'chime':
			case 'ding':
			case 'match':
			case 'success':
				tone(660, 0.12, 0.16);
				tone(990, 0.18, 0.12);
				break;
			case 'bonk':
				tone(110, 0.14, 0.2, 'triangle');
				break;
			case 'flip':
				noiseBurst(0.04, 0.08);
				tone(400, 0.05, 0.1);
				break;
			case 'thud':
				tone(80, 0.2, 0.15, 'triangle');
				break;
			case 'buzz':
			case 'fail':
				tone(120, 0.25, 0.14, 'square');
				break;
			case 'clink':
				tone(1200, 0.1, 0.14);
				break;
			case 'tap':
				tone(340, 0.06, 0.12);
				break;
			case 'fanfare':
				tone(523, 0.12, 0.14);
				tone(659, 0.12, 0.14);
				tone(784, 0.2, 0.16);
				break;
			case 'draw':
				tone(392, 0.15, 0.12);
				tone(392, 0.15, 0.1);
				break;
			case 'pad0':
				tone(262, 0.2, 0.14);
				break;
			case 'pad1':
				tone(330, 0.2, 0.14);
				break;
			case 'pad2':
				tone(392, 0.2, 0.14);
				break;
			case 'pad3':
				tone(494, 0.2, 0.14);
				break;
			case 'blip':
				tone(600, 0.07, 0.1);
				break;
			default:
				tone(440, 0.1, 0.12);
		}
	}

	startMusic(theme: MusicTheme): void {
		this.activeTheme = theme;
		if (!this.unlocked || !this.musicOn) return;
		this.stopMusic();
		const ctx = this.getCtx();
		if (!ctx) return;
		this.musicStep = 0;

		const patterns: Record<MusicTheme, number[]> = {
			bouncy: [262, 330, 392, 523],
			marimba: [392, 440, 494, 523, 587],
			quirky: [311, 370, 415, 466],
			musicbox: [523, 659, 784, 659],
			acoustic: [196, 247, 294, 349],
			dreamy: [220, 277, 330, 415],
			electronic: [130, 164, 196, 220],
			explore: [174, 220, 261, 329],
			playful: [349, 392, 440, 494],
		};

		const notes = patterns[theme] ?? patterns.bouncy;
		this.musicTimer = setInterval(() => {
			if (!this.musicOn || !this.unlocked) return;
			const freq = notes[this.musicStep % notes.length];
			this.musicStep += 1;
			const t = ctx.currentTime;
			const o = ctx.createOscillator();
			o.type = theme === 'electronic' ? 'triangle' : 'sine';
			o.frequency.value = freq;
			const gn = ctx.createGain();
			gn.gain.setValueAtTime(0.06, t);
			gn.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
			o.connect(gn);
			gn.connect(ctx.destination);
			o.start(t);
			o.stop(t + 0.4);
		}, theme === 'electronic' ? 480 : 620);
	}

	stopMusic(): void {
		if (this.musicTimer) {
			clearInterval(this.musicTimer);
			this.musicTimer = null;
		}
	}

	stopAll(): void {
		window.speechSynthesis?.cancel();
		this.stopMusic();
	}

	private getCtx(): AudioContext | null {
		if (typeof window === 'undefined') return null;
		if (!this.ctx) {
			const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
			if (!Ctx) return null;
			this.ctx = new Ctx();
		}
		if (this.ctx.state === 'suspended') void this.ctx.resume();
		return this.ctx;
	}

	private dispatchChange(): void {
		document.dispatchEvent(new CustomEvent('activity-audio-change'));
	}
}

export const audio = new ActivityAudioManager();

export function bindActivityUnlock(root: HTMLElement, theme?: MusicTheme): void {
	const once = () => {
		audio.unlock();
		if (theme && audio.musicOn) audio.startMusic(theme);
		root.removeEventListener('pointerdown', once);
		root.removeEventListener('click', once);
	};
	root.addEventListener('pointerdown', once, { passive: true });
	root.addEventListener('click', once, { passive: true });

	document.addEventListener('activity-audio-change', () => {
		if (!theme) return;
		if (audio.musicOn) audio.startMusic(theme);
		else audio.stopMusic();
	});
}
