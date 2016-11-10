import { FCCPomodoroPage } from './app.po';

describe('fcc-pomodoro App', function() {
  let page: FCCPomodoroPage;

  beforeEach(() => {
    page = new FCCPomodoroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
