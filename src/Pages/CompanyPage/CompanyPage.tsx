import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCompanyProfile } from '../../api';
import { CompanyProfile } from '../../company';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Tile from '../../Tile/Tile';

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, []);

  return (
    <>
      {company ? (
        <div>
          <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
            <Sidebar />

            <CompanyDashboard>
              <Tile title="Company Name" subtitle={company.companyName} />
            </CompanyDashboard>
          </div>
        </div>
      ) : (
        <div>company not found</div>
      )}
    </>
  );
};

export default CompanyPage;
