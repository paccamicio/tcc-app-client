import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'add-profile-picture',
    loadChildren: () => import('./pages/add-profile-picture/add-profile-picture.module').then( m => m.AddProfilePicturePageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/auth/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'booking-type-selector',
    loadChildren: () => import('./pages/booking-type-selector/booking-type-selector.module').then( m => m.BookingSelectorPageModule)
  },
  {
    path: 'booking-history',
    loadChildren: () => import('./pages/booking-history/booking-history.module').then( m => m.BookingHistoryPageModule)
  },
  {
    path: 'checkout-init',
    loadChildren: () => import('./pages/checkout/checkout-init/checkout-init.module').then( m => m.CheckoutInitPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'upcoming-bookings',
    loadChildren: () => import('./pages/upcoming-bookings/upcoming-bookings.module').then( m => m.UpcomingBookingsPageModule)
  },
  {
    path: 'booking-gym-selector',
    loadChildren: () => import('./pages/gym/booking-gym-selector/booking-gym-selector.module').then( m => m.BookingGymSelectorPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'booking-details',
    loadChildren: () => import('./pages/booking-details/booking-details.module').then( m => m.BookingDetailsPageModule)
  },
  {
    path: 'privacy-settings',
    loadChildren: () => import('./pages/privacy-settings/privacy-settings.module').then( m => m.PrivacySettingsPageModule)
  },
  {
    path: 'change-email',
    loadChildren: () => import('./pages/change-email/change-email.module').then( m => m.ChangeEmailPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'booking-options',
    loadChildren: () => import('./pages/booking-options/booking-options.module').then( m => m.BookingOptionsPageModule)
  },
  {
    path: 'court-booking',
    loadChildren: () => import('./pages/court-booking/court-booking.module').then( m => m.CourtBookingPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'checkout-credit-card',
    loadChildren: () => import('./pages/checkout/checkout-credit-card/checkout-credit-card.module').then( m => m.CheckoutCreditCardPageModule)
  },
  {
    path: 'checkout-pix',
    loadChildren: () => import('./pages/checkout/checkout-pix/checkout-pix.module').then( m => m.CheckoutPixPageModule)
  },
  {
    path: 'invite-payment',
    loadChildren: () => import('./pages/invite-payment/invite-payment.module').then( m => m.InvitePaymentPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'checkout-group-init',
    loadChildren: () => import('./pages/checkout/checkout-group-init/checkout-group-init.module').then( m => m.CheckoutGroupInitPageModule)
  },
  {
    path: 'checkout-group-room',
    loadChildren: () => import('./pages/checkout/checkout-group-room/checkout-group-room.module').then( m => m.CheckoutGroupRoomPageModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./pages/comments/comments.module').then( m => m.CommentsPageModule)
  },
  {
    path: 'clinic',
    loadChildren: () => import('./pages/clinic/clinic.module').then( m => m.ClinicPageModule)
  },
  // {
  //   path: 'generic',
  //   loadChildren: () => import('./pages/generic/generic.module').then( m => m.GenericPageModule)
  // },
  {
    path: 'scheduling-modal',
    loadChildren: () => import('./pages/modal/scheduling-modal/scheduling-modal.module').then( m => m.SchedulingModalPageModule)
  },
  {
    path: 'scheduling-hour-modal',
    loadChildren: () => import('./pages/modal/scheduling-hour-modal/scheduling-hour-modal.module').then( m => m.SchedulingHourModalPageModule)
  },
  {
    path: 'class-individual-booking',
    loadChildren: () => import('./pages/class-individual-booking/class-individual-booking.module').then( m => m.ClassIndividualBookingPageModule)
  },
  {
    path: 'booking-court-details',
    loadChildren: () => import('./pages/booking-court-details/booking-court-details.module').then( m => m.BookingCourtDetailsPageModule)
  },
  {
    path: 'lesson-booking-options',
    loadChildren: () => import('./pages/lesson-booking-options/lesson-booking-options.module').then( m => m.LessonBookingOptionsPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/modal/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'search-players',
    loadChildren: () => import('./pages/modal/search-players/search-players.module').then( m => m.SearchPlayersPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
