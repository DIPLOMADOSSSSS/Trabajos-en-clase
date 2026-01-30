import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from 'src/producto/entities/producto.entity';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class ProductoService {

    constructor(private readonly prisma: PrismaService) { }

    async create(dto: CreateProductoDto) {
        return this.prisma.product.create({
            data: {
                name: dto.name,
                description: dto.description,
                price: dto.price,
                sku: dto.sku,
                stock: dto.stock ?? 0,
                categoryId: dto.categoryId,
            },
            include: { category: true },
        });
    }

    async findAll() {
        return this.prisma.product.findMany({
            where: { isActive: true },
            include: { category: true },
        });
    }

    async findOne(id: string) {
        const producto = await this.prisma.product.findUnique({
            where: { id },
            include: { category: true },
        });
        
        if (!producto) {
            throw new NotFoundException(`Producto ${id} no existe`);
        }
        
        return producto;
    }

    async update(id: string, dto: UpdateProductoDto) {
        await this.findOne(id); // Verifica que existe
        
        return this.prisma.product.update({
            where: { id },
            data: {
                ...dto,
            },
            include: { category: true },
        });
    }

    async remove(id: string) {
        await this.findOne(id); // Verifica que existe
        
        return this.prisma.product.delete({
            where: { id },
        });
    }
}