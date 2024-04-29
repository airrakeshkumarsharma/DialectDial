import { PartialType } from '@nestjs/mapped-types';
import { CreateDialDto } from './create-dial.dto';

export class UpdateDialDto extends PartialType(CreateDialDto) {}
