import { Controller, Get, Param } from '@nestjs/common';

interface User {
    id: string;
    name: string;
    email: string;
}

@Controller('users')
export class UsersController {

  private users: User[] = [
  {
    id: '1',
    name: 'David',
    email: 'david.cabrera@gmail.com'
  },
  {
    id: '2',
    name: 'María García',
    email: 'maria.garcia@outlook.com'
  },
  {
    id: '3',
    name: 'Carlos Mendoza',
    email: 'carlos.mendoza@yahoo.es'
  },
  {
    id: '4',
    name: 'Ana Beltrán',
    email: 'ana.beltran@empresa.com'
  },
  {
    id: '5',
    name: 'Lucía Torres',
    email: 'lucia.torres@gmail.com'
  },
  {
    id: '6',
    name: 'Javier Ramos',
    email: 'javier.ramos@hotmail.com'
  },
  {
    id: '7',
    name: 'Sofia Herrera',
    email: 'sofia.herrera@gmail.com'
  },
  {
    id: '8',
    name: 'Diego Morales',
    email: 'diego.morales@empresa.org'
  },
  {
    id: '9',
    name: 'Elena Vargas',
    email: 'elena.vargas@icloud.com'
  },
  {
    id: '10',
    name: 'Fernando Cruz',
    email: 'fernando.cruz@tech.com'
  }
];
   
   @Get('')
   getUsers() {
    return this.users;
   }

   @Get(':id')
    getUserById(@Param('id') id: string) {
            console.log('.:: User ID: ', id)
            const user = this.users.find((user) => user.id === id);
            console.log('.:: usuario buscado: ', user)
            return user;
    }

      @Get('search/:name')
        getUserByName(@Param('name') name: string) {
            const data = this.users.find((user) => user.name === name);
            if (data){
                return {result: data?.email};
            }
            return {result: "User no encontrado"};
    }

}