import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from 'src/producto/entities/producto.entity';
@Injectable()
export class ProductoService {
    private producto: Producto[] = [];
    private nextId = 1;
    create(dto: CreateProductoDto): Producto {
        const newProducto: Producto = {
            id: this.nextId++,
            Name: dto.name,
            isActive: true,
            createdAt: new Date().toISOString(),
        };
        this.producto.push(newProducto);
        return newProducto;
    }
    findAll(): Producto[] {
        return this.producto;
    }
    findOne(id: number): Producto {
        const found = this.producto.find(c => c.id === id);
        if (!found) throw new NotFoundException(`Pr ${id} no existe`);
        return found;
    }
    update(id: number, dto: UpdateProductoDto): Producto {
        const producto = this.findOne(id);
        Object.assign(producto, dto);
        return producto;
    }
    remove(id: number): void {
        const idx = this.producto.findIndex(c => c.id === id);
        if (idx === -1) throw new NotFoundException(`producto ${id} no existe`);
        this.producto.splice(idx, 1);
    }
}