export class TemplateClass {
  constructor() {}

  public sendTokensToCex(amount: number) {
    // TODO: implement code to send tokens from the blockchain to CEX
    // @dev This may just include a simple transaction to a specific CEX-address. Tell us how
    // this process works. It may not necessarily require any API connection.
  }

  public sendTokensToAddress(amount: number) {
    // TODO: implement code to send tokens from the CEX to an on-chain address (basically initiating a
    // withdraw from the CEX)
  }
}
