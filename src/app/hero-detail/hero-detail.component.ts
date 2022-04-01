import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {

  faTrashCan = faTrashCan;
  @Input()
  hero!: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}



  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }


  addPower(): void {
    const poder = document.getElementById('hero-power') as HTMLInputElement;
    this.hero.superpoderes.push(poder.value);
    poder.value = '';
  }

  removePower(power: string): void{
    this.hero.superpoderes.forEach((item, index) => {
      if(item === power){
        this.hero.superpoderes.splice(index, 1);
      }
    });}

}
