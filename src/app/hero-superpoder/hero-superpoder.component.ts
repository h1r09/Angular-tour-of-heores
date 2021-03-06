import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-superpoder',
  templateUrl: './hero-superpoder.component.html',
  styleUrls: ['./hero-superpoder.component.scss']
})
export class HeroSuperpoderComponent implements OnInit {
  faTrashCan = faTrashCan;
  @Input()
  hero!: Hero;

  constructor(private route: ActivatedRoute,
    private heroService: HeroService,) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  addSuperpoder(): void {
    if(this.hero?.superpoderes != undefined){
      this.hero?.superpoderes?.push("");
      return;
    }
    this.hero!.superpoderes = [""];
  }

  deleteSuperpoder(superpoder: string): void {
    this.hero?.superpoderes?.forEach((element,index)=>{
      if(element==superpoder) this.hero?.superpoderes?.splice(index,1);
   });
  }

  identify(index: number, item: String){
    return index;
  }
}
