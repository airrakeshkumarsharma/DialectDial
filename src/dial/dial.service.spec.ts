import { Test, TestingModule } from '@nestjs/testing';
import { DialService } from './dial.service';

describe('DialService', () => {
  let service: DialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DialService],
    }).compile();

    service = module.get<DialService>(DialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
