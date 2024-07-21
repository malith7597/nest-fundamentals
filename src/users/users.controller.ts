import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  // following routes will be implemented.
  // GET /users
  // GET /users/:id
  // POST /users
  // PATCH /users/:id
  // DELETE /users/:id

  @Get()
  findAll() {
    return [];
  }

  /*  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Get('interns')
  findAllInterns() {
    return [];
  } */

  // if we define this interns route before the :id route, it will be treated as a dynamic route
  // and will not be accessible. So, make sure to define the dynamic routes at the end.

  @Get('interns')
  findAllInterns() {
    return [];
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: {}) {
    return {};
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { id };
  }

  // Query parameters
  @Get() // GET /users?role=admin
  findAllAdmins(
    @Query('role') role?: 'ADMINISTRATOR' | 'ADMIN' | 'SUPER_ADMIN',
  ) {
    return { role };
  }
}
