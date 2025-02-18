import { Injectable } from "@nestjs/common";
import { Client, ClientProxy } from "@nestjs/microservices";


@Injectable()
export class RabbitClientService {
  constructor(private readonly client: ClientProxy) {}

  emit(event: any, data: any) {
    this.client.emit<number>(event, data);
  }
}