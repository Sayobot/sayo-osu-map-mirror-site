import { TestBed } from '@angular/core/testing';

import { PlayMusicService } from './play-music.service';

describe('PlayMusicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayMusicService = TestBed.get(PlayMusicService);
    expect(service).toBeTruthy();
  });
});
