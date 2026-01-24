import { IsNotEmpty, IsString } from 'class-validator';
export class CreateProductoDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}