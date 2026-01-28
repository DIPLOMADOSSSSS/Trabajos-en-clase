import { Body, Controller, Post } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';  



@Controller('producto')
export class ProductoController {
    constructor(private readonly productoService: ProductoService) { }
    @Post()
    create(@Body() dto: CreateProductoDto) {
        return this.productoService.create(dto);
    }


}
