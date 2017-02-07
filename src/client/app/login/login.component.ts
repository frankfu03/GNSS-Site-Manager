import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import {UserAuthService} from '../shared/global/user-auth.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

/**
 * This class represents the SelectSiteComponent for searching and selecting CORS sites.
 */
@Component({
    moduleId: module.id,
    selector: 'login',
    template: '',
})
export class LoginComponent implements OnInit {
    constructor(private userAuthService: UserAuthService, private location: Location, private router: Router) {
        console.log('LoginComponent');
    }

    ngOnInit() {
        this.login();
    }

    login() {
        let locationHref: string = window.location.href;
        console.log('login - location: ', this.location.path());
        this.userAuthService.extractAuthDetails(locationHref);

        // TODO - change this to the page they were on - get from userAuthService
        this.router.navigate(['/']);
    }
}
