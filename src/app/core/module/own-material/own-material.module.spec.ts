import { OwnMaterialModule } from './own-material.module';

describe('OwnMaterialModule', () => {
  let ownMaterialModule: OwnMaterialModule;

  beforeEach(() => {
    ownMaterialModule = new OwnMaterialModule();
  });

  it('should create an instance', () => {
    expect(ownMaterialModule).toBeTruthy();
  });
});
