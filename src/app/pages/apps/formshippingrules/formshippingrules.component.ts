import { Component, OnInit } from "@angular/core";
import { UrlAPIService } from "src/app/services/url-api.service";
import { ShippingcountryeditModelComponent } from 'src/app/pages/apps/shippingcountryedit-model/shippingcountryedit-model.component';
import { MatDialog } from "@angular/material/dialog";
import faEdit from '@iconify/icons-fa-solid/edit';

@Component({
  selector: "vex-formshippingrules",
  templateUrl: "./formshippingrules.component.html",
  styleUrls: ["./formshippingrules.component.scss"],
})
export class FormshippingrulesComponent implements OnInit {
  ruleid;
  rulename;
  shippingcarrier;
  shippingservice;
  serviceformat;
  countries;
  postcodes;
  services;
  fromordervalue;
  toordervalue;
  fromshippingcharge;
  toshippingcharge;
  fromweight;
  toweight;
  fromlength;
  tolength;
  fromwidth;
  towidth;
  fromheight;
  toheight;
  channel;
  sku;
  carrierOption;
  faEdit = faEdit;
  countryList;
  self:any = this;

  shippingMethods = {
    royalmail: [
      { label: "Please Select a Service?", value: "-1" },
      {
        label: "TRACKED 48 SIGNATURE-TRACKED 48 SIGNATURE/TPSS",
        value: "TRACKED 48 SIGNATURE",
      },
      {
        label: "TRACKED 48 NO SIGNATURE-TRACKED 48 NO SIGNATURE/TPSN",
        value: "TRACKED 48 NO SIGNATURE",
      },
      {
        label: "TRACKED 24 SIGNATURE-TRACKED 24 SIGNATURE/TPNS",
        value: "TRACKED 24 SIGNATURE",
      },
      {
        label: "TRACKED 24 NO SIGNATURE-TRACKED 24 NO SIGNATURE/TPNN",
        value: "TRACKED 24 NO SIGNATURE",
      },
      {
        label:
          "INTL BUS PARCELS GB TRACKED & SIGNED-INTL BUS PARCELS GB TRACKED & SIGNED/MTAS",
        value: "INTL BUS PARCELS GB TRACKED & SIGNED",
      },
      {
        label:
          "INTL BUS PARCELS TRACKD & SIGND ZONE SRT-INTL BUS PARCELS TRACKD & SIGND ZONE SRT/MTA",
        value: "INTL BUS PARCELS TRACKD & SIGND ZONE SRT",
      },
      {
        label:
          "INTL BUS PRCL TRCKD SGND XTR CMP ZNE SRT-INTL BUS PRCL TRCKD SGND XTR CMP ZNE SRT/MTB",
        value: "INTL BUS PRCL TRCKD SGND XTR CMP ZNE SRT",
      },
      {
        label: "ROYAL MAIL FIRST CLASS-ROYAL MAIL FIRST CLASS/STL1",
        value: "ROYAL MAIL FIRST CLASS",
      },
      {
        label: "ROYAL MAIL SECOND CLASS-ROYAL MAIL SECOND CLASS/STL2",
        value: "ROYAL MAIL SECOND CLASS",
      },
      {
        label: "RM 1ST Signed P STL01-RM 1ST Signed P STL01/STL1PS",
        value: "RM 1ST Signed P STL01",
      },
      {
        label: "RM 1ST P STL01-RM 1ST P STL01/STL1PN",
        value: "RM 1ST P STL01",
      },
      {
        label: "RM 1ST Signed F STL01-RM 1ST Signed F STL01/STL1FS",
        value: "RM 1ST Signed F STL01",
      },
      {
        label: "RM 1ST Signed P STL01-RM 1ST Signed P STL01/STL1PS",
        value: "RM 1ST Signed P STL01",
      },
      {
        label: "SD GUARANTEED BY 1PM (£500)-SD GUARANTEED BY 1PM (£500)/SD1",
        value: "SD GUARANTEED BY 1PM (£500)",
      },
      {
        label:
          "SD GUARANTEED BY 1PM GB (£1000)-SD GUARANTEED BY 1PM GB (£1000)/SD2",
        value: "SD GUARANTEED BY 1PM GB (£1000)",
      },
      {
        label:
          "SD GUARANTEED BY 1PM GB (£2500)-SD GUARANTEED BY 1PM GB (£2500)/SD3",
        value: "SD GUARANTEED BY 1PM GB (£2500)",
      },
      {
        label:
          "SD SATURDAY GUARANTEED BY 1PM (£500)-SD SATURDAY GUARANTEED BY 1PM (£500)/SD1SG",
        value: "SD SATURDAY GUARANTEED BY 1PM (£500)",
      },
      {
        label:
          "SD SATURDAY GUARANTEED BY 1PM (£1000)-SD SATURDAY GUARANTEED BY 1PM (£1000)/SD2SG",
        value: "SD SATURDAY GUARANTEED BY 1PM (£1000)",
      },
      {
        label:
          "SD SATURDAY GUARANTEED BY 1PM (£2500)-SD SATURDAY GUARANTEED BY 1PM (£2500)/SD3SG",
        value: "SD SATURDAY GUARANTEED BY 1PM (£2500)",
      },
      {
        label: "SD GUARANTEED BY 9AM-SD GUARANTEED BY 9AM/SD4",
        value: "SD GUARANTEED BY 9AM",
      },
      {
        label: "SD GUARANTEED BY 9AM (£1000)-SD GUARANTEED BY 9AM (£1000)/SD5",
        value: "SD GUARANTEED BY 9AM (£1000)",
      },
      {
        label: "SD GUARANTEED BY 9AM (£2500)-SD GUARANTEED BY 9AM (£2500)/SD6",
        value: "SD GUARANTEED BY 9AM (£2500)",
      },
      {
        label: "INTL BUS PARCELS GB TRACKED-INTL BUS PARCELS GB TRACKED/MP1",
        value: "INTL BUS PARCELS GB TRACKED",
      },
      {
        label: "ROAYL MAIL 1st CLASS-ROAYL MAIL 1st CLASS/BPL1",
        value: "ROAYL MAIL 1st CLASS",
      },
      {
        label: "ROYAL MAIL 2nd CLASS-ROYAL MAIL 2nd CLASS/BPL2",
        value: "ROYAL MAIL 2nd CLASS",
      },
      {
        label:
          "ROYAL MAIL SIGNED 1ST GB CLASS-ROYAL MAIL SIGNED 1ST GB CLASS/BPR1",
        value: "ROYAL MAIL SIGNED 1ST GB CLASS",
      },
      {
        label:
          "ROYAL MAIL SIGNED 2ND GB CLASS-ROYAL MAIL SIGNED 2ND GB CLASS/BPR2",
        value: "ROYAL MAIL SIGNED 2ND GB CLASS",
      },
      {
        label:
          "INTL BUS PARCELS ZONE INTL SORT PRIORITY (INTERNATIONAL)-INTL BUS PARCELS ZONE INTL SORT PRIORITY (INTERNATIONAL)/IE1",
        value: "INTL BUS PARCELS ZONE INTL SORT PRIORITY (INTERNATIONAL)",
      },
      {
        label:
          "INTL BUS MAIL LRG LTR INTL ZONE SORT PRI (INTERNATIONAL)-INTL BUS MAIL LRG LTR INTL ZONE SORT PRI (INTERNATIONAL)/IG1",
        value: "INTL BUS MAIL LRG LTR INTL ZONE SORT PRI (INTERNATIONAL)",
      },
      {
        label:
          "INTL BUS PARCELS INTL TRACKED EXTRA COMP INTERNATIONAL TRACKED (INTERNATIONAL)-INTL BUS PARCELS INTL TRACKED EXTRA COMP INTERNATIONAL TRACKED (INTERNATIONAL)/MP4",
        value:
          "INTL BUS PARCELS INTL TRACKED EXTRA COMP INTERNATIONAL TRACKED (INTERNATIONAL)",
      },
      {
        label:
          "INTL BUS PARCELS SIGNED (INTERNATIONAL)-INTL BUS PARCELS SIGNED (INTERNATIONAL)/MP5",
        value: "INTL BUS PARCELS SIGNED (INTERNATIONAL)",
      },
      {
        label:
          "DW1-INTL BUS PARCELS PARCELS BESPOKE POSTAL-DW1-INTL BUS PARCELS PARCELS BESPOKE POSTAL/DW1",
        value: "DW1-INTL BUS PARCELS PARCELS BESPOKE POSTAL",
      },
      {
        label:
          "INTL BUS MAIL TRACKED & INTL SIGNED (INTERNATIONAL)-INTL BUS MAIL TRACKED & INTL SIGNED (INTERNATIONAL)/MTC",
        value: "INTL BUS MAIL TRACKED & INTL SIGNED (INTERNATIONAL)",
      },
      {
        label:
          "INT BUS MAIL TRCKD & SGND ZN SRT XTR CMP-INT BUS MAIL TRCKD & SGND ZN SRT XTR CMP/MTD",
        value: "INT BUS MAIL TRCKD & SGND ZN SRT XTR CMP",
      },
      {
        label:
          "INTL BUS PARCELS INTL TRACKED & SIGNED CTRY (INTERNATIONAL)-INTL BUS PARCELS INTL TRACKED & SIGNED CTRY (INTERNATIONAL)/MTE",
        value: "INTL BUS PARCELS INTL TRACKED & SIGNED CTRY (INTERNATIONAL)",
      },
      {
        label:
          "INTL BUS MAIL TRACKED (INTERNATIONAL)-INTL BUS MAIL TRACKED (INTERNATIONAL)/MTI",
        value: "INTL BUS MAIL TRACKED (INTERNATIONAL)",
      },
      {
        label:
          "INTL BUS MAIL SIGNED (INTERNATIONAL)-INTL BUS MAIL SIGNED (INTERNATIONAL)/MTM",
        value: "INTL BUS MAIL SIGNED (INTERNATIONAL)",
      },
      {
        label:
          "INTERNATIONAL STANDARD INTL ON ACCOUNT (INTERNATIONAL)-INTERNATIONAL STANDARD INTL ON ACCOUNT (INTERNATIONAL)/OLA",
        value: "INTERNATIONAL STANDARD INTL ON ACCOUNT (INTERNATIONAL)",
      },
      {
        label:
          "INTERNATIONAL SIGNED ON INTL ACCOUNT (INTERNATIONAL)-INTERNATIONAL SIGNED ON INTL ACCOUNT (INTERNATIONAL)/OSA",
        value: "INTERNATIONAL SIGNED ON INTL ACCOUNT (INTERNATIONAL)",
      },
      {
        label:
          "INTERNATIONAL SIGNED ON ACCOUNT EXTRA COMP-INTERNATIONAL SIGNED ON ACCOUNT EXTRA COMP/OSB",
        value: "INTERNATIONAL SIGNED ON ACCOUNT EXTRA COMP",
      },
      {
        label:
          "INTERNATIONAL TRACKED ON ACCOUNT-INTERNATIONAL TRACKED ON ACCOUNT/OTA",
        value: "INTERNATIONAL TRACKED ON ACCOUNT",
      },
      {
        label:
          "INTL TRACKED ON ACCOUNT EXTRA COMP-INTL TRACKED ON ACCOUNT EXTRA COMP/OTB",
        value: "INTL TRACKED ON ACCOUNT EXTRA COMP",
      },
      {
        label:
          "INTERNATIONAL TRACKED & SIGNED ON ACCT-INTERNATIONAL TRACKED & SIGNED ON ACCT/OTC",
        value: "INTERNATIONAL TRACKED & SIGNED ON ACCT",
      },
      {
        label:
          "INTL TRACKED & SIGNED ON ACCT EXTRA COMP-INTL TRACKED & SIGNED ON ACCT EXTRA COMP/OTD",
        value: "INTL TRACKED & SIGNED ON ACCT EXTRA COMP",
      },
      {
        label:
          "ROYAL MAIL 48 (LL) FLAT GB RATE-ROYAL MAIL 48 (LL) FLAT GB RATE/PK0",
        value: "ROYAL MAIL 48 (LL) FLAT GB RATE",
      },
      {
        label:
          "ROYAL MAIL 24 (SORT8) GB (LL\\P) DAILY RATE-ROYAL MAIL 24 (SORT8) GB (LL\\P) DAILY RATE/PK3",
        value: "ROYAL MAIL 24 (SORT8) GB (LL P) DAILY RATE",
      },
      {
        label:
          "ROYAL MAIL 48 (SORT8) GB (LL\\P) DAILY RATE-ROYAL MAIL 48 (SORT8) GB (LL\\P) DAILY RATE/PK4",
        value: "ROYAL MAIL 48 (SORT8) GB (LL P) DAILY RATE",
      },
      { label: "ROYAL MAIL 24-ROYAL MAIL 24/CRL1", value: "ROYAL MAIL 24" },
      { label: "ROYAL MAIL 48-ROYAL MAIL 48/CRL2", value: "ROYAL MAIL 48" },
      {
        label:
          "ROYAL MAIL 24 (SORT8) (LL) FLAT RATE-ROYAL MAIL 24 (SORT8) (LL) FLAT RATE/FS1",
        value: "ROYAL MAIL 24 (SORT8) (LL) FLAT RATE",
      },
      {
        label:
          "ROYAL MAIL 48 (SORT8) (LL) FLAT RATE-ROYAL MAIL 48 (SORT8) (LL) FLAT RATE/FS2",
        value: "ROYAL MAIL 48 (SORT8) (LL) FLAT RATE",
      },
      {
        label:
          "ROYAL MAIL 24 (PRESORTED) (LL)-ROYAL MAIL 24 (PRESORTED) (LL)/FS7",
        value: "ROYAL MAIL 24 (PRESORTED) (LL)",
      },
      {
        label:
          "ROYAL MAIL 48 (PRESORTED) (LL)-ROYAL MAIL 48 (PRESORTED) (LL)/FS8",
        value: "ROYAL MAIL 48 (PRESORTED) (LL)",
      },
      {
        label:
          "INTL BUS MAIL L LTR ZONE SRT ECONOMY MCH-INTL BUS MAIL L LTR ZONE SRT ECONOMY MCH/IG6",
        value: "INTL BUS MAIL L LTR ZONE SRT ECONOMY MCH",
      },
      {
        label: "SD GUARANTEED BY 1PM LA-SD GUARANTEED BY 1PM LA/LA1",
        value: "SD GUARANTEED BY 1PM LA",
      },
      {
        label:
          "SD GUARANTEED BY 1PM LA (£1000)-SD GUARANTEED BY 1PM LA (£1000)/LA2",
        value: "SD GUARANTEED BY 1PM LA (£1000)",
      },
      {
        label:
          "SD GUARANTEED BY 1PM LA (£2500)-SD GUARANTEED BY 1PM LA (£2500)/LA3",
        value: "SD GUARANTEED BY 1PM LA (£2500)",
      },
      {
        label: "SD GUARANTEED BY 9AM LA-SD GUARANTEED BY 9AM LA/LA4",
        value: "SD GUARANTEED BY 9AM LA",
      },
      {
        label:
          "SD GUARANTEED BY 9AM LA (£1000)-SD GUARANTEED BY 9AM LA (£1000)/LA5",
        value: "SD GUARANTEED BY 9AM LA (£1000)",
      },
      {
        label:
          "SD GUARANTEED BY 9AM LA (£2500)-SD GUARANTEED BY 9AM LA (£2500)/LA6",
        value: "SD GUARANTEED BY 9AM LA (£2500)",
      },
      {
        label:
          "INTL BUS PARCELS SIGNED EXTRA COMP CTRY-INTL BUS PARCELS SIGNED EXTRA COMP CTRY/MP0",
        value: "INTL BUS PARCELS SIGNED EXTRA COMP CTRY",
      },
      {
        label:
          "INTL BUS PARCELS SIGNED EXTRA COMP- INTL BUS PARCELS SIGNED EXTRA COMP/MP6",
        value: " INTL BUS PARCELS SIGNED EXTRA COMP",
      },
      {
        label:
          "INTL BUS PARCELS TRACKED COUNTRY PRICED-INTL BUS PARCELS TRACKED COUNTRY PRICED/MP7",
        value: "INTL BUS PARCELS TRACKED COUNTRY PRICED",
      },
      {
        label:
          "INTL BUS PARCELS TRACKED EXTRA COMP CTRY-INTL BUS PARCELS TRACKED EXTRA COMP CTRY/MP8",
        value: "INTL BUS PARCELS TRACKED EXTRA COMP CTRY",
      },
      {
        label:
          "INTL BUS PARCELS SIGNED COUNTRY PRICED-INTL BUS PARCELS SIGNED COUNTRY PRICED/MP9",
        value: "INTL BUS PARCELS SIGNED COUNTRY PRICED",
      },
      {
        label:
          "INTL BUS PARCEL TRACK BOX CTRY XTRA COMP-INTL BUS PARCEL TRACK BOX CTRY XTRA COMP/MPB",
        value: "INTL BUS PARCEL TRACK BOX CTRY XTRA COMP",
      },
      {
        label:
          "INTL BUS PARCEL TRACKED HIGH VOL-INTL BUS PARCEL TRACKED HIGH VOL/MPF",
        value: "INTL BUS PARCEL TRACKED HIGH VOL",
      },
      {
        label:
          "INTL BUS PARCEL TRACK & SIGN HIGH VOL-INTL BUS PARCEL TRACK & SIGN HIGH VOL/MPG",
        value: "INTL BUS PARCEL TRACK & SIGN HIGH VOL",
      },
      {
        label:
          "INTL BUS PARCEL SIGNED HIGH VOL-INTL BUS PARCEL SIGNED HIGH VOL/MPH",
        value: "INTL BUS PARCEL SIGNED HIGH VOL",
      },
      {
        label:
          "INTL BUS PARCELS TRACKED EXTRA COMP CTRY-INTL BUS PARCELS TRACKED EXTRA COMP CTRY/MPI",
        value: "INTL BUS PARCELS TRACKED EXTRA COMP CTRY",
      },
      {
        label:
          "INTL BUS PARCEL T&S HIGH VOL XTR COMP-INTL BUS PARCEL T&S HIGH VOL XTR COMP/MPJ",
        value: "INTL BUS PARCEL T&S HIGH VOL XTR COMP",
      },
      {
        label:
          "INTL BUS PARCEL SIGNED HIGH VOL XTR COMP-INTL BUS PARCEL SIGNED HIGH VOL XTR COMP/MPK",
        value: "INTL BUS PARCEL SIGNED HIGH VOL XTR COMP",
      },
      {
        label:
          "INTL BUS MAIL MIXED ZONE SORT PRIORITY-INTL BUS MAIL MIXED ZONE SORT PRIORITY/OZ1",
        value: "INTL BUS MAIL MIXED ZONE SORT PRIORITY",
      },
      {
        label:
          "INTERNATIONAL ECONOMY ON ACCOUNT-INTERNATIONAL ECONOMY ON ACCOUNT/OLS",
        value: "INTERNATIONAL ECONOMY ON ACCOUNT",
      },
      {
        label: "TRACKED RETURNS 48-TRACKED RETURNS 48/TSS",
        value: "TRACKED RETURNS 48",
      },
      {
        label: "TRACKED RETURNS 24-TRACKED RETURNS 24/TSN",
        value: "TRACKED RETURNS 24",
      },
      {
        label:
          "ROYAL MAIL TRACKED 48 (LBT) - Non Signature-ROYAL MAIL TRACKED 48 (LBT) - Non Signature/TRS",
        value: "ROYAL MAIL TRACKED 48 (LBT) - Non Signature",
      },
      {
        label:
          "ROYAL MAIL TRACKED 24 (LBT) - Non Signature-ROYAL MAIL TRACKED 24 (LBT) - Non Signature/TRN",
        value: "ROYAL MAIL TRACKED 24 (LBT) - Non Signature",
      },
      {
        label:
          "ROYAL MAIL TRACKED 24 (LBT) (HV) - Non Signature-ROYAL MAIL TRACKED 24 (LBT) (HV) - Non Signature/TRM",
        value: "ROYAL MAIL TRACKED 24 (LBT) (HV) - Non Signature",
      },
      {
        label:
          "ROYAL MAIL TRACKED 48 (LBT) (HV) - Non Signature-ROYAL MAIL TRACKED 48 (LBT) (HV) - Non Signature/TRL",
        value: "ROYAL MAIL TRACKED 48 (LBT) (HV) - Non Signature",
      },
      {
        label: "ROYAL MAIL 48 (P) FLAT RATE-ROYAL MAIL 48 (P) FLAT RATE/RM6",
        value: "ROYAL MAIL 48 (P) FLAT RATE",
      },
      {
        label: "ROYAL MAIL 24 (P) FLAT RATE-ROYAL MAIL 24 (P) FLAT RATE/RM5",
        value: "ROYAL MAIL 24 (P) FLAT RATE",
      },
      {
        label: "ROYAL MAIL 48 (P) DAILY RATE-ROYAL MAIL 48 (P) DAILY RATE/RM4",
        value: "ROYAL MAIL 48 (P) DAILY RATE",
      },
      {
        label:
          "ROYAL MAIL 48 (LL) DAILY RATE-ROYAL MAIL 48 (LL) DAILY RATE/RM3",
        value: "ROYAL MAIL 48 (LL) DAILY RATE",
      },
      { label: "HM FORCES-HM FORCES/BF1", value: "HM FORCES" },
      {
        label: "HM FORCES SIGNED FOR-HM FORCES SIGNED FOR/BF2",
        value: "HM FORCES SIGNED FOR",
      },
      {
        label: "HM FORCES SPECIAL DELIVERY-HM FORCES SPECIAL DELIVERY/BF7",
        value: "HM FORCES SPECIAL DELIVERY",
      },
      {
        label:
          "HM FORCES SPECIAL DELIVERY (£1000)-HM FORCES SPECIAL DELIVERY (£1000)/BF8",
        value: "HM FORCES SPECIAL DELIVERY (£1000)",
      },
      {
        label:
          "HM FORCES SPECIAL DELIVERY (£2500)-HM FORCES SPECIAL DELIVERY (£2500)/BF9",
        value: "HM FORCES SPECIAL DELIVERY (£2500)",
      },
      {
        label:
          "INTL BUS MAIL LARGE LETTER MAX SORT PRIORITY-INTL BUS MAIL LARGE LETTER MAX SORT PRIORITY/PS7",
        value: "INTL BUS MAIL LARGE LETTER MAX SORT PRIORITY",
      },
      {
        label:
          "INTL BUS PARCELS MAX SORT PRIORITY-INTL BUS PARCELS MAX SORT PRIORITY/PS9",
        value: "INTL BUS PARCELS MAX SORT PRIORITY",
      },
      {
        label: "ROYAL MAIL TRACKED 24 (AGE)-ROYAL MAIL TRACKED 24 (AGE)/TPC",
        value: "ROYAL MAIL TRACKED 24 (AGE)",
      },
      {
        label: "ROYAL MAIL TRACKED 48 (AGE)-ROYAL MAIL TRACKED 48 (AGE)/TPD",
        value: "ROYAL MAIL TRACKED 48 (AGE)",
      },
      { label: "UNH-UNH/UNH", value: "UNH" },
      { label: "UNG-UNG/UNG", value: "UNG" },
      {
        label:
          "INTL BUS MAIL LRG LTR MAX SORT RES PRI-INTL BUS MAIL LRG LTR MAX SORT RES PRI/BG1",
        value: "INTL BUS MAIL LRG LTR MAX SORT RES PRI",
      },
      {
        label:
          "INTL BUS MAIL LRG LTR MAX SORT RES STD-INTL BUS MAIL LRG LTR MAX SORT RES STD/BG2",
        value: "INTL BUS MAIL LRG LTR MAX SORT RES STD",
      },
      {
        label:
          "INTL BUS MAIL L LTR MAX SORT RES ECONOMY-INTL BUS MAIL L LTR MAX SORT RES ECONOMY/BG3",
        value: "INTL BUS MAIL L LTR MAX SORT RES ECONOMY",
      },
      {
        label:
          "INTL BUS MAIL LETTERS MAX SORT RES PRI-INTL BUS MAIL LETTERS MAX SORT RES PRI/BP1",
        value: "INTL BUS MAIL LETTERS MAX SORT RES PRI",
      },
      {
        label:
          "INTL BUS MAIL LETTERS MAX SORT RES STD-INTL BUS MAIL LETTERS MAX SORT RES STD/BP2",
        value: "INTL BUS MAIL LETTERS MAX SORT RES STD",
      },
      {
        label:
          "INTL BUS MAIL LTR MAX SORT RES ECONOMY-INTL BUS MAIL LTR MAX SORT RES ECONOMY/BP3",
        value: "INTL BUS MAIL LTR MAX SORT RES ECONOMY",
      },
      {
        label:
          "INTL BUS MAIL LTR CTRY SORT HI VOL PRI-INTL BUS MAIL LTR CTRY SORT HI VOL PRI/DP1",
        value: "INTL BUS MAIL LTR CTRY SORT HI VOL PRI",
      },
      {
        label:
          "INTL BUS MAIL LTR CTRY SORT HI VOL ECON-INTL BUS MAIL LTR CTRY SORT HI VOL ECON/DP3",
        value: "INTL BUS MAIL LTR CTRY SORT HI VOL ECON",
      },
      {
        label:
          "INTL BUS MAIL LTR CTRY SORT LO VOL PRI-INTL BUS MAIL LTR CTRY SORT LO VOL PRI/DP4",
        value: "INTL BUS MAIL LTR CTRY SORT LO VOL PRI",
      },
      {
        label:
          "INTL BUS MAIL LTR CTRY SORT LO VOL ECON-INTL BUS MAIL LTR CTRY SORT LO VOL ECON/DP6",
        value: "INTL BUS MAIL LTR CTRY SORT LO VOL ECON",
      },
      {
        label:
          "INTL BUS PARCELS BESPOKE POSTAL-INTL BUS PARCELS BESPOKE POSTAL/DW1",
        value: "INTL BUS PARCELS BESPOKE POSTAL",
      },
      {
        label: "CUSTOMER NESTED MAXSORT-CUSTOMER NESTED MAXSORT/DW2",
        value: "CUSTOMER NESTED MAXSORT",
      },
      {
        label:
          "INTL BUS MAIL LTR ZONE SORT PRI-INTL BUS MAIL LTR ZONE SORT PRI/IP1",
        value: "INTL BUS MAIL LTR ZONE SORT PRI",
      },
      {
        label:
          "INTL BUS MAIL LTR ZONE SORT ECONOMY-INTL BUS MAIL LTR ZONE SORT ECONOMY/IP3",
        value: "INTL BUS MAIL LTR ZONE SORT ECONOMY",
      },
      {
        label:
          "INTL BUS MAIL LETTERS ZONE SORT PRI MCH-INTL BUS MAIL LETTERS ZONE SORT PRI MCH/IP4",
        value: "INTL BUS MAIL LETTERS ZONE SORT PRI MCH",
      },
      {
        label:
          "INTL BUS MAIL LTR ZONE SRT ECONOMY MCH-INTL BUS MAIL LTR ZONE SRT ECONOMY MCH/IP6",
        value: "INTL BUS MAIL LTR ZONE SRT ECONOMY MCH",
      },
      {
        label:
          "Import DE Tracked 48 Parcels (TPL) - Non Signature-Import DE Tracked 48 Parcels (TPL) - Non Signature/ITLN",
        value: "Import DE Tracked 48 Parcels (TPL) - Non Signature",
      },
      {
        label:
          "Import DE Tracked 48 Parcels (TPL) - Signature-Import DE Tracked 48 Parcels (TPL) - Signature/ITLS",
        value: "Import DE Tracked 48 Parcels (TPL) - Signature",
      },
      {
        label:
          "Import DE Tracked 24 Parcels (TPM) - No Signature-Import DE Tracked 24 Parcels (TPM) - No Signature/ITMN",
        value: "Import DE Tracked 24 Parcels (TPM) - No Signature",
      },
      {
        label:
          "Import DE tracked 24 Parcels (TPM) - Signature-Import DE tracked 24 Parcels (TPM) - Signature/ITMS",
        value: "Import DE tracked 24 Parcels (TPM) - Signature",
      },
      {
        label:
          "Import DE tracked 24 Parcels (TPM) - Signature-Import DE tracked 24 Parcels (TPM) - Signature/ITMS",
        value: "Import DE tracked 24 Parcels (TPM) - Signature",
      },
      {
        label: "QM/10 Option 2 over 500g-QM/10 Option 2 over 500g/TC1",
        value: "QM/10 Option 2 over 500g",
      },
      {
        label: "QM/10 Option 2 Mixed Mail-QM/10 Option 2 Mixed Mail/TC2",
        value: "QM/10 Option 2 Mixed Mail",
      },
      {
        label:
          "Royal Mail Tracked 24 (HV) - With Signature (AGE)-Royal Mail Tracked 24 (HV) - With Signature (AGE)/TPA",
        value: "Royal Mail Tracked 24 (HV) - With Signature (AGE)",
      },
      {
        label:
          "Royal Mail Tracked 48 (HV) - With Signature (AGE)-Royal Mail Tracked 48 (HV) - With Signature (AGE)/TPB",
        value: "Royal Mail Tracked 48 (HV) - With Signature (AGE)",
      },
      {
        label:
          "Royal Mail Tracked 24 - With Signature (AGE)-Royal Mail Tracked 24 - With Signature (AGE)/TPC",
        value: "Royal Mail Tracked 24 - With Signature (AGE)",
      },
      {
        label:
          "Royal Mail Tracked 48 - With Signature (AGE)-Royal Mail Tracked 48 - With Signature (AGE)/TPD",
        value: "Royal Mail Tracked 48 - With Signature (AGE)",
      },
      {
        label:
          "ROYAL MAIL TRACKED 48 (HV) NO SIGNATURE-ROYAL MAIL TRACKED 48 (HV) NO SIGNATURE/TPLN",
        value: "ROYAL MAIL TRACKED 48 (HV) NO SIGNATURE",
      },
      {
        label:
          "ROYAL MAIL TRACKED 48 (HV) SIGNATURE-ROYAL MAIL TRACKED 48 (HV) SIGNATURE/TPLS",
        value: "ROYAL MAIL TRACKED 48 (HV) SIGNATURE",
      },
      {
        label:
          "ROYAL MAIL TRACKED 24 (HV) NO SIGNATURE-ROYAL MAIL TRACKED 24 (HV) NO SIGNATURE/TPMN",
        value: "ROYAL MAIL TRACKED 24 (HV) NO SIGNATURE",
      },
      {
        label:
          "ROYAL MAIL TRACKED 24 (HV) SIGNATURE-ROYAL MAIL TRACKED 24 (HV) SIGNATURE/TPMS",
        value: "ROYAL MAIL TRACKED 24 (HV) SIGNATURE",
      },
      {
        label:
          "INTL BUS MAIL LETTERS ZERO SORT PRIORITY-INTL BUS MAIL LETTERS ZERO SORT PRIORITY/WP1",
        value: "INTL BUS MAIL LETTERS ZERO SORT PRIORITY",
      },
      {
        label:
          "INTL BUS MAIL LETTERS ZERO SORT ECONOMY-INTL BUS MAIL LETTERS ZERO SORT ECONOMY/WP3",
        value: "INTL BUS MAIL LETTERS ZERO SORT ECONOMY",
      },
      {
        label:
          "INTL BUS MAIL LETTERS ZERO SORT PRI MCH-INTL BUS MAIL LETTERS ZERO SORT PRI MCH/WP4",
        value: "INTL BUS MAIL LETTERS ZERO SORT PRI MCH",
      },
      {
        label:
          "INT BUS PARCELS ZERO SORT LO VOL PRIORITY-INT BUS PARCELS ZERO SORT LO VOL PRIORITY/DE4",
        value: "INT BUS PARCELS ZERO SORT LO VOL PRIORITY",
      },
    ],
    dpd: [{"label":"Please Select a Service?","value":"-1"},{"label":"PARCEL Sunday-1^01","value":"PARCEL Sunday-1*01"},{"label":"FREIGHT PARCEL Sunday-1^06","value":"FREIGHT PARCEL Sunday-1*06"},{"label":"PALLET Sunday-1^08","value":"PALLET Sunday-1*08"},{"label":"EXPRESSPAK Sunday-1^09","value":"EXPRESSPAK Sunday-1*09"},{"label":"PARCEL Two Day-1^11","value":"PARCEL Two Day-1*11"},{"label":"PARCEL Next Day-1^12","value":"PARCEL Next Day-1*12"},{"label":"PARCEL Before 12-1^13","value":"PARCEL Before 12-1*13"},{"label":"PARCEL Before 10-1^14","value":"PARCEL Before 10-1*14"},{"label":"PARCEL Saturday-1^16","value":"PARCEL Saturday-1*16"},{"label":"PARCEL Sat by 12-1^17","value":"PARCEL Sat by 12-1*17"},{"label":"PARCEL TSat by 10-1^18","value":"PARCEL TSat by 10-1*18"},{"label":"Parcel - DPD Classic (2 to 3 days) INTERNATIONAL-1^19","value":"Parcel - DPD Classic (2 to 3 days) INTERNATIONAL-1*19"},{"label":"Home EVE-1^21","value":"Home EVE-1*21"},{"label":"PARCEL RETURN TO SHOP-1^22","value":"PARCEL RETURN TO SHOP-1*22"},{"label":"Home AM-1^23","value":"Home AM-1*23"},{"label":"Home PM-1^25","value":"Home PM-1*25"},{"label":"PARCEL Sunday 12:00-1^29","value":"PARCEL Sunday 12:00-1*29"},{"label":"FREIGHT PARCEL Sunday 12:00-1^31","value":"FREIGHT PARCEL Sunday 12:00-1*31"},{"label":"ExpressPak Next Day-1^32","value":"ExpressPak Next Day-1*32"},{"label":"ExpressPak Before 12-1^33","value":"ExpressPak Before 12-1*33"},{"label":"ExpressPak Before 10-1^34","value":"ExpressPak Before 10-1*34"},{"label":"ExpressPak Saturday-1^36","value":"ExpressPak Saturday-1*36"},{"label":"ExpressPak Sat by 12-1^37","value":"ExpressPak Sat by 12-1*37"},{"label":"ExpressPak Sat by 10-1^38","value":"ExpressPak Sat by 10-1*38"},{"label":"Expresspak - DPD Classic (2 to 3 days) INTERNATIONAL-1^39","value":"Expresspak - DPD Classic (2 to 3 days) INTERNATIONAL-1*39"},{"label":"Swapit Two Day-1^41","value":"Swapit Two Day-1*41"},{"label":"Swapit Next Day-1^42","value":"Swapit Next Day-1*42"},{"label":"Swapit Before 12-1^43","value":"Swapit Before 12-1*43"},{"label":"Swapit Before 10-1^44","value":"Swapit Before 10-1*44"},{"label":"Swapit Saturday-1^46","value":"Swapit Saturday-1*46"},{"label":"Swapit Sat by 12-1^47","value":"Swapit Sat by 12-1*47"},{"label":"Swapit Sat by 10-1^48","value":"Swapit Sat by 10-1*48"},{"label":"Air Express (2 days) INTERNATIONAL-1^50","value":"Air Express (2 days) INTERNATIONAL-1*50"},{"label":"EXPRESSPAK Sunday 12:00-1^51","value":"EXPRESSPAK Sunday 12:00-1*51"},{"label":"Homecall-1^59","value":"Homecall-1*59"},{"label":"Air Classic (3 to 4 days) INTERNATIONAL-1^60","value":"Air Classic (3 to 4 days) INTERNATIONAL-1*60"},{"label":"PALLET Sunday 12:00-1^69","value":"PALLET Sunday 12:00-1*69"},{"label":"Pallet Two Day-1^71","value":"Pallet Two Day-1*71"},{"label":"Pallet Next Day-1^72","value":"Pallet Next Day-1*72"},{"label":"Pallet Before 12-1^73","value":"Pallet Before 12-1*73"},{"label":"Pallet Before 10-1^74","value":"Pallet Before 10-1*74"},{"label":"Pallet Saturday-1^76","value":"Pallet Saturday-1*76"},{"label":"Pallet Sat by 12-1^77","value":"Pallet Sat by 12-1*77"},{"label":"Pallet Sat by 10-1^78","value":"Pallet Sat by 10-1*78"},{"label":"Pallet - DPD Classic (2 to 3 days) INTERNATIONAL-1^79","value":"Pallet - DPD Classic (2 to 3 days) INTERNATIONAL-1*79"},{"label":"Freight Two Day-1^81","value":"Freight Two Day-1*81"},{"label":"Freight Next Day-1^82","value":"Freight Next Day-1*82"},{"label":"Freight Before 12-1^83","value":"Freight Before 12-1*83"},{"label":"Freight Before 10-1^84","value":"Freight Before 10-1*84"},{"label":"Freight Saturday-1^86","value":"Freight Saturday-1*86"},{"label":"Freight Sat by 12-1^87","value":"Freight Sat by 12-1*87"},{"label":"Freight Sat by 10-1^88","value":"Freight Sat by 10-1*88"},{"label":"Freight Parcel - DPD Classic (2 to 3 days)-1^89","value":"Freight Parcel - DPD Classic (2 to 3 days)-1*89"},{"label":"Contract Pak Two Day-1^91","value":"Contract Pak Two Day-1*91"},{"label":"Contract Pak Next Day-1^92","value":"Contract Pak Next Day-1*92"},{"label":"Contract Pak Before 12-1^93","value":"Contract Pak Before 12-1*93"},{"label":"Contract Pak Before 10-1^94","value":"Contract Pak Before 10-1*94"},{"label":"Contract Pak Saturday-1^96","value":"Contract Pak Saturday-1*96"},{"label":"Contract Pak Sat by 12-1^97","value":"Contract Pak Sat by 12-1*97"},{"label":"Expak - Pickup Classic (2 to 3 days) INTERNATIONAL-1^98","value":"Expak - Pickup Classic (2 to 3 days) INTERNATIONAL-1*98"},{"label":"Parcel - Pickup Classic (2 to 3 days) INTERNATIONAL-1^99","value":"Parcel - Pickup Classic (2 to 3 days) INTERNATIONAL-1*99"}],
    
    yodel: [{"label":"Please Select a Service?","value":"-1"},{"label":"XPRESS 24 NON POD-1CN","value":"XPRESS 24 NON POD-1CN"},{"label":"XPRESS 24 POD-1CP","value":"XPRESS 24 POD-1CP"},{"label":"XPRESS MINI 48 NON POD-2CMN","value":"XPRESS MINI 48 NON POD-2CMN"},{"label":"XPRESS 48 NON POD-2CN","value":"XPRESS 48 NON POD-2CN"},{"label":"XPRESS 48 POD-2CP","value":"XPRESS 48 POD-2CP"},{"label":"XPECT 48 XL NON POD-2VLN","value":"XPECT 48 XL NON POD-2VLN"},{"label":"XPECT 48 XL POD-2VLP","value":"XPECT 48 XL POD-2VLP"},{"label":"XPECT 48 NON POD-2VN","value":">XPECT 48 NON POD-2VN"},{"label":"XPECT 48 POD-2VP","value":"XPECT 48 POD-2VP"},{"label":"XPRESS 24 NON POD-1CNNI","value":"XPRESS 24 NON POD-1CNNI"},{"label":"XPRESS 24 POD-1CPNI","value":"XPRESS 24 POD-1CPNI"},{"label":"XPRESS MINI 48 NON POD-2CMNNI","value":"XPRESS MINI 48 NON POD-2CMNNI"},{"label":"XPRESS 48 NON POD-2CNNI","value":"XPRESS 48 NON POD-2CNNI"},{"label":"XPRESS 48 POD-2CPNI","value":"XPRESS 48 POD-2CPNI"},{"label":"XPECT 48 XL NON POD-2VLNNI","value":"XPECT 48 XL NON POD-2VLNNI"},{"label":"XPECT 48 XL POD-2VLPNI","value":"XPECT 48 XL POD-2VLPNI"},{"label":"XPECT 48 NON POD-2VNNI","value":"XPECT 48 NON POD-2VNNI"},{"label":"XPECT 48 POD-2VPNI","value":"XPECT 48 POD-2VPNI"},{"label":"Priority 10:00 (10)-DIA","value":"Priority 10:00 (10)-DIA"},{"label":"Priority 12:00 (12)-NOON","value":"Priority 12:00 (12)-NOON"},{"label":"Saturday 12:00 (12S)-SAT","value":"Saturday 12:00 (12S)-SAT"},{"label":"UK Expect 24 POD (1EXP)-1EXP","value":"UK Expect 24 POD (1EXP)-1EXP"},{"label":"UK Express (Isle) (ISLE)-ISLE","value":"UK Express (Isle) (ISLE)-ISLE"},{"label":"UK Express 24 (1E)-STD","value":"UK Express 24 (1E)-STD"},{"label":"UK Express 24 NI INT (1EB)-1EB","value":"UK Express 24 NI INT (1EB)-1EB"},{"label":"UK Express 24 UK (1EU)-1EU","value":"UK Express 24 UK (1EU)-1EU"},{"label":"UK Express 48 (ECO)-ECO","value":"UK Express 48 (ECO)-ECO"},{"label":"UK Express 48 NI (2EN)-NIS","value":"UK Express 48 NI (2EN)-NIS"},{"label":"UK Express Saturday 12 (1ES)-STSA","value":"UK Express Saturday 12 (1ES)-STSA"},{"label":"UK Home Delivery 24 (1H)-HDN","value":"UK Home Delivery 24 (1H)-HDN"},{"label":"UK Home Delivery 24 BT (1HB)-1HB","value":"UK Home Delivery 24 BT (1HB)-1HB"},{"label":"UK Home Delivery 48 (HECO)-HECO","value":"UK Home Delivery 48 (HECO)-HECO"},{"label":"UK Home Delivery 48 BT (2HB)-2HB","value":"UK Home Delivery 48 BT (2HB)-2HB"},{"label":"UK Home Delivery 48 (NI)-2HN","value":"UK Home Delivery 48 (NI)-2HN"},{"label":"UK Home Delivery 72 (3H)-HDPA","value":"UK Home Delivery 72 (3H)-HDPA"},{"label":"UK Home Delivery 72 NI (3HN)-HIPA","value":"UK Home Delivery 72 NI (3HN)-HIPA"},{"label":"UK Home Delivery Catalogue (5HCT)-5HCT","value":"UK Home Delivery Catalogue (5HCT)-5HCT"},{"label":"UK Home Delivery Saturday (HSAT)-HSAT","value":"UK Home Delivery Saturday (HSAT)-HSAT"},{"label":"UK Packet Service (3HPA)-PACK","value":"UK Packet Service (3HPA)-PACK"}]
  };

  constructor(private urlApi: UrlAPIService, private dialog: MatDialog) {}

  ngOnInit(): void {}
  save() {
    this.urlApi.saveshippingrules(
        this.ruleid,
        this.rulename,
        this.shippingcarrier,
        this.shippingservice,
        this.serviceformat,
        this.countries,
        this.postcodes,
        this.services,
        this.fromordervalue,
        this.toordervalue,
        this.fromshippingcharge,
        this.toshippingcharge,
        this.fromweight,
        this.toweight,
        this.fromlength,
        this.tolength,
        this.fromwidth,
        this.towidth,
        this.fromheight,
        this.toheight,
        this.channel,
        this.sku
      )
      .subscribe((data: any) => {
        try {
        } catch (err) {
          console.log("errr", err);
        }
      });
  }
  onCarrierChange(e) {
    this.carrierOption = e;
    this.shippingcarrier = e;
  }

  onServiceChange(e){
    this.shippingservice = e;
  }

  onCountrysave(c){
    debugger;
    this.countryList = c;
    console.log(c);
  }

  openShipCountryModal() {
    this.dialog.open(ShippingcountryeditModelComponent, {
      width: "100%",
      maxWidth: 850,
      data: { onCountrysave: this.onCountrysave.bind(this) }
      // data: { ids: ids }
    });
  }

  onCountrylistselect(e){
    this.countries = e;
  }


}
