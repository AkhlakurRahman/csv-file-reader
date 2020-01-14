import { OutputTarget } from '../MatchSummary';
import { writeFileSync } from 'fs';

export class HtmlOutput implements OutputTarget {
  print(report: string): void {
    const html = `
      <div>
        <h3>Match Summary</h3>
        <p>${report}</p>
      </div>
    `;

    writeFileSync('report.html', html);
  }
}
