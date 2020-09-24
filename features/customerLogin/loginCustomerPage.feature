Feature: To login OneAP Customer page

    @OutlineScenario
    Scenario Outline: Login customer page

        Given I am on OneAP Customer Login page
        When I enter username "<USERID>"
        And I enter password "<PASSWORD>"
        When I click on button login
        Then I would loggin success

        Examples:
            | USERID                   | PASSWORD  |
            | vancuong.tran@eitsvn.com | Admin@123 |
            | vancuong.tran@eitsvn.com | Wrongp@ss |
