import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  public notificationList:any = [
    {
      buttonText: "Confirmar",
      message: "Layla enviou uma solicitação de amizade para você (exemplo)",
      timestamp: new Date().setMonth(8),
      action: console.log('notifAct'),
      cancelAction: console.log('notif cancel'),
      image: 'https://www.nalabeauty.com.br/uploads/products/2020/09/79-layla-1599483294.jpg',
    },
    {
      buttonText: "Avaliar",
      message: "Faça sua avaliação sobre a sua última aula (exemplo)",
      timestamp: new Date().setMonth(9),
      action: console.log('notifAct'),
      cancelAction: console.log('notif cancel'),
      image: 'https://www.ofuxico.com.br/img/upload/noticias/2021/04/06/alexandre-nero-em-imperio_400548_36.jpg',
    },
    {
      buttonText: "Comentar",
      message: "Faça um comentário sobre sua última aula (exemplo)",
      timestamp: new Date().setMonth(9),
      action: console.log('notifAct'),
      cancelAction: console.log('notif cancel'),
      image: 'https://www.ofuxico.com.br/img/upload/noticias/2021/04/06/alexandre-nero-em-imperio_400548_36.jpg',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
