import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    fullName: string;
    email: string;
    @IsString()
    @IsOptional()
    phone?: string;
}