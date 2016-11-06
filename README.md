# Land Registry Price Paid Data

Price Paid Data tracks property sales in England and Wales submitted to Land Registry for registration. Price Paid Data is based on the raw data released each month.

## How the data can be used
The data creates numerous opportunities for individuals and organisations to share it, or combine it with other data to create new applications and services. For example some application developers, data analysts, estate agents and property website owners have used the data to:

- analyse trends and patterns in the housing market
- create valuation software and price estimations
- use insights to develop housing and social policy
- innovate and grow their business.

[See the land registry page...](https://www.gov.uk/government/organisations/land-registry)


<table>
  <thead>
    <tr>
      <th>Data item</th>
      <th>Explanation (where appropriate)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Transaction unique identifier</td>
      <td>A reference number which is generated automatically recording each published sale. The number is unique and will change each time a sale is recorded.</td>
    </tr>
    <tr>
      <td>Price</td>
      <td>Sale price stated on the transfer deed.</td>
    </tr>
    <tr>
      <td>Date of Transfer</td>
      <td>Date when the sale was completed, as stated on the transfer deed.</td>
    </tr>
    <tr>
      <td>Postcode</td>
      <td>This is the postcode used at the time of the original transaction. Note that postcodes can be reallocated and these changes are not reflected in the Price Paid Dataset.</td>
    </tr>
    <tr>
      <td>Property Type</td>
      <td>D = Detached, S = Semi-Detached, T = Terraced, F = Flats/Maisonettes, O = Other <br>Note that: <br>- we only record the above categories to describe property type, we do not separately identify bungalows. <br>- end-of-terrace properties are included in the Terraced category above. <br>- ‘Other’ is only valid where the transaction relates to a property type that is not covered by existing values.</td>
    </tr>
    <tr>
      <td>Old/New</td>
      <td>Indicates the age of the property and applies to all price paid transactions, residential and non-residential.<br>Y = a newly built property, N = an established residential building</td>
    </tr>
    <tr>
      <td>Duration</td>
      <td>Relates to the tenure: F = Freehold, L= Leasehold etc.<br>Note that Land Registry does not record leases of 7 years or less in the Price Paid Dataset.</td>
    </tr>
    <tr>
      <td>PAON</td>
      <td>Primary Addressable Object Name. If there is a sub-building for example the building is divided into flats, see Secondary Addressable Object Name (SAON).</td>
    </tr>
    <tr>
      <td>SAON</td>
      <td>Secondary Addressable Object Name. If there is a sub-building, for example the building is divided into flats, there will be a SAON.</td>
    </tr>
    <tr>
      <td>Street</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>Locality</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>Town/City</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>District</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>County</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>
<abbr title="Price Paid Data">PPD</abbr> Category Type</td>
      <td>Indicates the type of Price Paid transaction.<br>A = Standard Price Paid entry, includes single residential property sold for full market value.<br>B = Additional Price Paid entry including transfers under a power of sale/repossessions, buy-to-lets (where they can be identified by a Mortgage) and transfers to non-private individuals.<br><br>Note that category B does not separately identify the transaction types stated.<br>Land Registry has been collecting information on Category A transactions from January 1995. Category B transactions were identified from October 2013.</td>
    </tr>
    <tr>
      <td>Record Status - monthly file only</td>
      <td>Indicates additions, changes and deletions to the records.(see guide below).<br>A = Addition<br>C = Change<br>D = Delete.<br><br>Note that where a transaction changes category type due to misallocation (as above) it will be deleted from the original category type and added to the correct category with a new transaction unique identifier.</td>
    </tr>
  </tbody>
</table>