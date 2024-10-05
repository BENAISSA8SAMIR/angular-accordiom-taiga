import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
	selector: 'app',
    standalone: true,
    exportAs: "Example1",
    imports: [TuiAccordion],
    templateUrl: './app.template.html',
    styleUrls: ["./app.style.less"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
