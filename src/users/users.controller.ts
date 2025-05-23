import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getUser(@Param('id') id: number) {
    const user = await this.usersService.findById(id);
    return { id: user?.id, email: user?.email, role: user?.role };
  }
}
