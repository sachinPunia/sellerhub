import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UrlAPIService } from "src/app/services/url-api.service";

@Component({
  selector: "vex-formproductattribute",
  templateUrl: "./formproductattribute.component.html",
  styleUrls: ["./formproductattribute.component.scss"],
})
export class FormproductattributeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private urlApi: UrlAPIService) {}

  ngOnInit(): void {
    console.log("state id :::", this.route.snapshot);
    console.log("state id :::", this.route.snapshot.queryParams.id);
    const id = this.route.snapshot.queryParams.id;
    if (!!id) {
      this.urlApi.getEditsettingset(id).subscribe((editatt: any) => {
        // console.log("id", editatt);
        try {
          console.log("id", editatt.attribute["id"]);
        } catch (err) {
          console.log("errr", err);
        }
      });
    }
  }
}
