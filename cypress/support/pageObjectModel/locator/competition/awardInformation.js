class AwardInformation {

    awardInformationTab = '//*[@id="root"]/div/div/main/div[1]/div/div[2]/div[1]/div/div[2]'
    awardsApplication = '.w-full.h-14.flex.justify-start.items-center > span'
    registrationFee = '.px-8.pt-2 > div'
    listCheckboxAward = '.ant-checkbox-input'
    totalFeeSelected = 'updating...'
    submitBtn = 'button[type="submit"]'

}
const awardInformation = new AwardInformation();
export default awardInformation;