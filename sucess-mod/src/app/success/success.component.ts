import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { UserService } from '../services/userService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: false,
  templateUrl: './success.html',
  styleUrl: './success.scss',
})
export class SuccessComponent implements OnInit {
  protected readonly title = signal('success');

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private userService = inject(UserService);

  @Input({ required: true }) userId!: string;

  @Input() name: string = '';
  @Input() email: string = '';
  @Input() choice: string = '';
  @Output() continue = new EventEmitter<void>();

  loading = true;
  error = false;

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      const name = params.get('name');
      const email = params.get('email');
      const choice = params.get('choice');
      if (name && email && choice) {
        this.name = name;
        this.email = email;
        this.choice = choice;
        this.loading = false;
      } else {
        this.userId = this.activatedRoute.snapshot.paramMap.get('userId') ?? '';

        this.userService.getUser(this.userId).subscribe({
          next: (user) => {
            this.name = user.name;
            this.email = user.email;
            this.choice = user.choice;
            this.loading = false;
          },
          error: (e) => {
            this.error = true;
            this.loading = false;
          },
        });
      }
    });
  }
}
