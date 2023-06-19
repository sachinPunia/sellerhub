import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAnalyticsRoutingModule } from './dashboard-analytics-routing.module';
import { DashboardAnalyticsComponent } from './dashboard-analytics.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartModule } from '../../../../@vex/components/chart/chart.module';
import { MatIconModule } from '@angular/material/icon';
import { WidgetQuickLineChartModule } from '../../../../@vex/components/widgets/widget-quick-line-chart/widget-quick-line-chart.module';
import { WidgetQuickValueCenterModule } from '../../../../@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.module';
import { WidgetQuickValueStartModule } from '../../../../@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.module';
import { WidgetLargeGoalChartModule } from '../../../../@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.module';
import { IconModule } from '@visurel/iconify-angular';
import { WidgetAssistantModule } from '../../../../@vex/components/widgets/widget-assistant/widget-assistant.module';
import { WidgetLargeChartModule } from '../../../../@vex/components/widgets/widget-large-chart/widget-large-chart.module';
import { WidgetTableModule } from '../../../../@vex/components/widgets/widget-table/widget-table.module';
import { SecondaryToolbarModule } from '../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { BreadcrumbsModule } from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { MatButtonModule } from '@angular/material/button';
import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { ContainerModule } from '../../../../@vex/directives/container/container.module';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [DashboardAnalyticsComponent],
  imports: [
    CommonModule,
    DashboardAnalyticsRoutingModule,
    FlexLayoutModule,
    ChartModule,
    MatIconModule,
    WidgetQuickLineChartModule,
    WidgetQuickValueCenterModule,
    WidgetQuickValueStartModule,
    WidgetLargeGoalChartModule,
    IconModule,
    WidgetAssistantModule,
    WidgetLargeChartModule,
    WidgetTableModule,
    SecondaryToolbarModule,
    BreadcrumbsModule,
    MatButtonModule,
    PageLayoutModule,
    ContainerModule,
    MatListModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatGridListModule,
    GoogleChartsModule
  ]
})
export class DashboardAnalyticsModule {
}
