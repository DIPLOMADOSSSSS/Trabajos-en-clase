import { IsNotEmpty, IsString, IsNumber, IsOptional, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductoDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsNotEmpty()
    @Type(() => Number)
    price: number;

    @IsString()
    @IsNotEmpty()
    sku: string;

    @IsInt()
    @IsOptional()
    @Type(() => Number)
    stock?: number;

    @IsString()
    @IsNotEmpty()
    categoryId: string;
}