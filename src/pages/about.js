import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import PageLayout from "@components/PageLayout";
import SectionHeader from "@components/SectionHeader";
import Container, { MemberContainer } from "@styles/pages/about";

export async function getStaticProps() {
    const REVALIDATE_TIME = parseInt(process.env.REVALIDATE_TIME) || 300;

  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_CMS_URL +
        "/api/members?populate=*&sort=displayOrder:asc"
    );
    const { data } = await res.json();

    const teamMembers = data.filter(
      (member) => member.attributes.memberType === "TEAM"
    );
    const boardMembers = data.filter(
      (member) => member.attributes.memberType === "BOARD"
    );

    return {
      props: {
        teamMembers: teamMembers || [],
        boardMembers: boardMembers || [],
      },
      revalidate: REVALIDATE_TIME,
    };
  } catch (error) {
    return {
      props: {},
      revalidate: REVALIDATE_TIME,
    };
  }
}

export default function About({ teamMembers = [], boardMembers = [] }) {
  return (
    <PageLayout title={"About"}>
      <Container>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="text-left"></h1>
                <SectionHeader text={"What we do"} />
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/pdXnwJKj3HM"
                  />
                </div>
                <br />
                <br />
                <div className="col-lg-12 mb-4 mt-2 text-center">
                  <p className="text-center">
                    Web3 Working Group is a 501(c)(3) nonprofit organization.
                    Our purpose is to educate about web3 infrastructure and how
                    it&apos;s distinct but adjacent to the cryptocurrency
                    industry. We educate regulators and the public at-large
                    about how web3 will permanently restore user control of
                    cyberspace, replacing centralized control with transparent
                    and permissionless protocols through incentives aligned with
                    users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="col-lg-12 mb-4 mt-2 text-center">
                  <div
                    id="mc_embed_signup"
                    style={{ width: "100% !important" }}
                  >
                    <form
                      action="https://web3wg.us18.list-manage.com/subscribe/post?u=48368c3ef3e46e1c97ae96f92&amp;id=bbe8c37aaf&amp;v_id=5472&amp;f_id=00db11e7f0"
                      method="post"
                      id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      className="validate"
                      target="_self"
                    >
                      <div
                        style={{ textAlign: "center !important" }}
                        id="mc_embed_signup_scroll"
                      >
                        <SectionHeader text={"Newsletter"} />
                        <div
                          style={{ color: "white", marginRight: "0px" }}
                          className="indicates-required"
                        >
                          <span className="asterisk">*</span> indicates required
                        </div>
                        <div
                          className="mc-field-group"
                          style={{ width: "100%", marginRight: "0px" }}
                        >
                          <label
                            htmlFor="mce-EMAIL"
                            style={{ fontSize: "1em", marginBottom: "0px" }}
                          >
                            Email Address <span className="asterisk">*</span>
                          </label>
                          <input
                            type="email"
                            name="EMAIL"
                            className="required email"
                            id="mce-EMAIL"
                            required
                          />
                        </div>
                        <div
                          style={{ width: "100%", marginTop: "0px" }}
                          id="mergeRow-gdpr"
                          className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
                        >
                          <div className="content__gdpr">
                            <label
                              style={{
                                fontSize: "0.75em",
                                marginBottom: "0px",
                              }}
                            >
                              Marketing Permissions
                            </label>
                            <p
                              style={{
                                fontSize: "0.75em",
                                marginBottom: "10px",
                              }}
                            >
                              Please select all the ways you would like to hear
                              from Web3 Working Group:
                            </p>
                            <fieldset
                              className="mc_fieldset gdprRequired mc-field-group"
                              name="interestgroup_field"
                            >
                              <label
                                style={{
                                  fontSize: "0.75em",
                                  marginBottom: "0px",
                                }}
                                className="checkbox subfield"
                                htmlFor="gdpr_97208"
                              >
                                <input
                                  type="checkbox"
                                  id="gdpr_97208"
                                  name="gdpr[97208]"
                                  value="Y"
                                  className="av-checkbox gdpr"
                                />
                                <span>Email</span>
                              </label>
                            </fieldset>
                            <p
                              style={{
                                fontSize: "0.75em",
                                marginBottom: "0px",
                              }}
                            >
                              You can unsubscribe at any time by clicking the
                              link in the footer of our emails.
                            </p>
                          </div>
                          <div className="content__gdprLegal">
                            <p
                              style={{
                                fontSize: "0.75em",
                                marginBottom: "0px",
                              }}
                            >
                              We use Mailchimp as our marketing platform. By
                              clicking below to subscribe, you acknowledge that
                              your information will be transferred to Mailchimp
                              for processing.
                              <a
                                href="https://mailchimp.com/legal/terms"
                                target="_blank"
                              >
                                Learn more about Mailchimp&apos;s privacy
                                practices here.
                              </a>
                            </p>
                          </div>
                        </div>
                        <div id="mce-responses" className="clear">
                          <div
                            className="response"
                            id="mce-error-response"
                            style={{ display: "none" }}
                          ></div>
                          <div
                            className="response"
                            id="mce-success-response"
                            style={{ display: "none" }}
                          ></div>
                        </div>
                        <div
                          style={{ position: "absolute", left: "-5000px" }}
                          aria-hidden="true"
                        >
                          <input
                            type="text"
                            name="b_48368c3ef3e46e1c97ae96f92_bbe8c37aaf"
                            tabIndex="-1"
                          />
                        </div>
                        <div className="clear">
                          <button
                            type="submit"
                            id="mc-embedded-subscribe"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container" style={{ paddingBottom: "100px" }}>
            {!!teamMembers.length && (
              <>
                <SectionHeader text={"Team"} />
                <div className="row">
                  {teamMembers.map((member) => (
                    <Member
                      key={member.id}
                      {...member.attributes}
                      type={"TEAM"}
                    />
                  ))}
                </div>
              </>
            )}

            {!!boardMembers.length && (
              <>
                <SectionHeader text={"Board"} />
                <div className="row">
                  {boardMembers.map((member) => (
                    <Member
                      key={member.id}
                      {...member.attributes}
                      type={"BOARD"}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </Container>
    </PageLayout>
  );
}

function Member({
  profilePicture,
  socialLink,
  fullName,
  position,
  description,
  type,
}) {
  return (
    <MemberContainer className="col-lg-6 col-md-12 col-sm-12">
      <div
        className={classNames("member-inner-container", {
          "alternate-color": type === "BOARD",
        })}
      >
        <div className="inner-container">
          <div className="image-container">
            <Image
              alt="Member picture"
              width={82}
              height={82}
              src={
                process.env.NEXT_PUBLIC_CMS_URL +
                profilePicture.data.attributes.url
              }
              data-holder-rendered="true"
            />
          </div>
        </div>
        <div className="inner-container">
          <h3>
            {socialLink ? (
              <Link href={socialLink} rel="noopener noreferrer" target="_blank">
                {fullName}
              </Link>
            ) : (
              <>{fullName}</>
            )}
          </h3>
          {position && <h4 className="position">{position}</h4>}
          {description && <pre>{description}</pre>}
        </div>
      </div>
    </MemberContainer>
  );
}
