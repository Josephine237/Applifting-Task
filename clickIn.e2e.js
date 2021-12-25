
describe('Page', () => {

    it('should click in', () => {
        browser.reloadSession();
        browser.url('/');
        browser.pause(5000);

        const nameField = $('#name');
        const button = $('button[type="submit"]');

        expect(nameField).toBeEnabled();
        expect(button).toBeDisplayed();

        expect(button).toHaveText('CLICK!');
        nameField.setValue('Jenny');
        button.click();
    });
        
});