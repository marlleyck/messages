import { Module } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService, PrismaService],
})
export class PokemonModule {}
