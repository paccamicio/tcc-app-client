import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  openModal: any;
  closeModal: any;

  constructor() { }

  ngOnInit() {}

  // var openmodal = document.querySelectorAll('.modal-open')
  // for (var i = 0; i < openmodal.length; i++) {
  //   openmodal[i].addEventListener('click', function(event){
  //   event.preventDefault()
  //   toggleModal()
  //   })
  // }

  // const overlay = document.querySelector('.modal-overlay')
  // overlay.addEventListener('click', toggleModal)

  // var closemodal = document.querySelectorAll('.modal-close')
  // for (var i = 0; i < closemodal.length; i++) {
  //   closemodal[i].addEventListener('click', toggleModal)
  // }

  // function toggleModal () {
  //   const body = document.querySelector('body')
  //   const modal = document.querySelector('.modal')
  //   modal.classList.toggle('opacity-0')
  //   modal.classList.toggle('pointer-events-none')
  //   body.classList.toggle('modal-active')
  // }

}
