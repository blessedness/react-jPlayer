import { defaultOptions, statusDefaultValues, actionTypes, loopOptions,
   errors, hints } from '../util/constants';

const jPlayerActionTypes = actionTypes.jPlayer;
const playerIdOne = 'player-1';
const playerIdTwo = 'player-2';
const playerIdThree = 'player-3';

export const clearMediaData = ([
  {
    state: {
      media: {
        sources: {
          mp3: 'test.mp3',
          title: 'test',
          artist: 'test-artist',
        },
      },
    },
    action: {
      type: jPlayerActionTypes.CLEAR_MEDIA,
      uid: playerIdOne,
    },
    expected: {
      ...statusDefaultValues,
      media: defaultOptions.media,
    },
  },
]);

export const playData = [
  {
    state: {
      src: 'test.mp3',
    },
    action: {
      type: jPlayerActionTypes.PLAY,
      time: 30,
      uid: playerIdOne,
    },
    expected: {
      newTime: 30,
      paused: false,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.PLAY,
      time: 30,
      uid: playerIdOne,
    },
    expected: {
      error: {
        context: 'play',
        hint: hints.URL_NOT_SET,
        message: errors.URL_NOT_SET,
      },
    },
  },
];

export const playHeadData = ([
  {
    state: {
      src: 'test.mp3',
    },
    action: {
      type: jPlayerActionTypes.PLAY_HEAD,
      percent: 300,
      uid: playerIdOne,
    },
    expected: {
      playHeadPercent: 100,
    },
  },
  {
    state: {
      src: 'test.mp3',
    },
    action: {
      type: jPlayerActionTypes.PLAY_HEAD,
      percent: -100,
      uid: playerIdOne,
    },
    expected: {
      playHeadPercent: 0,
    },
  },
  {
    state: {
      src: 'test.mp3',
    },
    action: {
      type: jPlayerActionTypes.PLAY_HEAD,
      percent: 30,
      uid: playerIdOne,
    },
    expected: {
      playHeadPercent: 30,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.PLAY_HEAD,
      percent: 30,
      uid: playerIdOne,
    },
    expected: {
      error: {
        context: 'setPlayHead',
        hint: hints.URL_NOT_SET,
        message: errors.URL_NOT_SET,
      },
    },
  },
]);

export const pauseData = [
  {
    state: {
      src: 'test.mp3',
    },
    action: {
      type: jPlayerActionTypes.PAUSE,
      time: 30,
      uid: playerIdOne,
    },
    expected: {
      newTime: 30,
      paused: true,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.PAUSE,
      time: 30,
      uid: playerIdOne,
    },
    expected: {
      error: {
        context: 'pause',
        hint: hints.URL_NOT_SET,
        message: errors.URL_NOT_SET,
      },
    },
  },
];

export const volumeData = ([
  {
    action: {
      type: jPlayerActionTypes.VOLUME,
      volume: 30,
      uid: playerIdOne,
    },
    expected: {
      volume: 1,
      muted: false,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.VOLUME,
      volume: -30,
      uid: playerIdOne,
    },
    expected: {
      volume: 0,
      muted: true,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.VOLUME,
      volume: 0.3,
      uid: playerIdOne,
    },
    expected: {
      volume: 0.3,
      muted: false,
    },
  },
]);

export const muteData = ([
  {
    action: {
      type: jPlayerActionTypes.MUTE,
      mute: true,
      uid: playerIdOne,
    },
    expected: {
      muted: true,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.MUTE,
      mute: false,
      uid: playerIdOne,
    },
    expected: {
      muted: false,
    },
  },
]);

export const durationData = ([
  {
    action: {
      type: jPlayerActionTypes.DURATION,
      remainingDuration: true,
      uid: playerIdOne,
    },
    expected: {
      remainingDuration: false,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.DURATION,
      remainingDuration: false,
      uid: playerIdOne,
    },
    expected: {
      remainingDuration: true,
    },
  },
]);

export const playbackRateData = ([
  {
    state: {
      maxPlaybackRate: defaultOptions.maxPlaybackRate,
    },
    action: {
      type: jPlayerActionTypes.PLAYBACK_RATE,
      playbackRate: 30,
      uid: playerIdOne,
    },
    expected: {
      playbackRate: defaultOptions.maxPlaybackRate,
    },
  },
  {
    state: {
      minPlaybackRate: defaultOptions.minPlaybackRate,
    },
    action: {
      type: jPlayerActionTypes.PLAYBACK_RATE,
      playbackRate: -30,
      uid: playerIdOne,
    },
    expected: {
      playbackRate: defaultOptions.minPlaybackRate,
    },
  },
  {
    state: {
      minPlaybackRate: defaultOptions.minPlaybackRate,
      maxPlaybackRate: defaultOptions.maxPlaybackRate,
    },
    action: {
      type: jPlayerActionTypes.PLAYBACK_RATE,
      playbackRate: 1.3,
      uid: playerIdOne,
    },
    expected: {
      playbackRate: 1.3,
    },
  },
]);

export const loopData = ([
  {
    action: {
      type: jPlayerActionTypes.LOOP,
      loop: loopOptions.OFF,
      uid: playerIdOne,
    },
    expected: {
      loop: loopOptions.OFF,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.LOOP,
      loop: loopOptions.LOOP,
      uid: playerIdOne,
    },
    expected: {
      loop: loopOptions.LOOP,
    },
  },
]);

export const fullScreenData = ([
  {
    action: {
      type: jPlayerActionTypes.FULL_SCREEN,
      fullScreen: false,
      uid: playerIdOne,
    },
    expected: {
      fullScreen: false,
    },
  },
  {
    action: {
      type: jPlayerActionTypes.FULL_SCREEN,
      fullScreen: true,
      uid: playerIdOne,
    },
    expected: {
      fullScreen: true,
    },
  },
]);

