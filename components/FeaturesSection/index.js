import React from 'react'

import {
  FeaturesContainer,
  FeaturesWrapper,
  SectionRow,
  FeaturesTable,
  FeaturesTableHeading,
  FeaturesTableFooter,
  FeaturesTableData,
  TableTitle,
  TableData,
  Support,
  SupportPlus,
  RedEx,
  GreenDot,
  Unlimited,
} from './style'

export default function FeaturesSection(props) {
  const {
    freeOnly,
  } = props;
  return (
    <>
      <FeaturesContainer lightBg={true} id="features-section">
        <FeaturesWrapper>
          <SectionRow>
            <FeaturesTable>
              <FeaturesTableHeading>
                <TableTitle>
                Features
                </TableTitle>
                <TableData>Orders</TableData>
                <TableData>Products</TableData>
                <TableData>Support</TableData>
                <TableData>Staff Accounts</TableData>
                <TableData>Locations</TableData>
                <TableData>Product Management</TableData>
                <TableData>Online Store</TableData>
                <TableData>Customer Management</TableData>
                <TableData>Abandon Cart Recovery</TableData>
                <TableData>Inventory Tracking</TableData>
                <TableData>Basic Reporting</TableData>
                <TableData>Distrubution Management</TableData>
                <TableData>Directory Map</TableData>
                <TableData>Online Payments</TableData>
                <TableData>Category Management</TableData>
                <TableData>Manual Order Creation</TableData>
                <TableData>Discount Codes</TableData>
                <TableData>Supplier Management</TableData>
                <TableData>Advanced Reporting</TableData>
                <TableData>Multi-Store Support</TableData>
              </FeaturesTableHeading>
              <FeaturesTableData>
                <TableTitle>
                  Free
                </TableTitle>
                <TableData>50</TableData>
                <TableData>10</TableData>
                <TableData><Support>Chat + Email</Support></TableData>
                <TableData><RedEx /></TableData>
                <TableData>2</TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><GreenDot /></TableData>
                <TableData><RedEx /></TableData>
                <TableData><RedEx /></TableData>
                <TableData><RedEx /></TableData>
                <TableData><RedEx /></TableData>
                <TableData><RedEx /></TableData>
              </FeaturesTableData>
              {!freeOnly && (
                <>
                  <FeaturesTableData>
                  <TableTitle>
                    Paid
                  </TableTitle>
                  <TableData>200</TableData>
                  <TableData><Unlimited /></TableData>
                  <TableData><Support>Chat + Email</Support></TableData>
                  <TableData>3</TableData>
                  <TableData>5</TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><RedEx /></TableData>
                </FeaturesTableData>
                <FeaturesTableData>
                  <TableTitle>
                    Business
                  </TableTitle>
                  <TableData><Unlimited /></TableData>
                  <TableData><Unlimited /></TableData>
                  <TableData><SupportPlus>24/7 - Support</SupportPlus></TableData>
                  <TableData>10</TableData>
                  <TableData><Unlimited /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><RedEx /></TableData>
                </FeaturesTableData>
                <FeaturesTableData>
                  <TableTitle>
                    Enterprise
                  </TableTitle>
                  <TableData><Unlimited /></TableData>
                  <TableData><Unlimited /></TableData>
                  <TableData><SupportPlus>24/7 - Support</SupportPlus></TableData>
                  <TableData><Unlimited /></TableData>
                  <TableData><Unlimited /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                  <TableData><GreenDot /></TableData>
                </FeaturesTableData>
                </>
              )}
              <FeaturesTableFooter>

              </FeaturesTableFooter>
            </FeaturesTable>
          </SectionRow>
        </FeaturesWrapper>
      </FeaturesContainer> 
    </>
  )
}