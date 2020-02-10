import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'codenebula';

  // add custom theme to global overlayContainer so the theme will be properly applied to components that use the overlay
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('custom-theme-1');
  }
}
