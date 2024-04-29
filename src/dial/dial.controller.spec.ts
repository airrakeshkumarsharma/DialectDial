import { Test, TestingModule } from '@nestjs/testing';
import { DialController } from './dial.controller';
import { DialService } from './dial.service';

describe('DialController', () => {
  let controller: DialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DialController],
      providers: [DialService],
    }).compile();

    controller = module.get<DialController>(DialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
