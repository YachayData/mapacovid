import React, { Component, Fragment } from 'react'
import { FaInfoCircle, FaGithub } from 'react-icons/fa'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import { isMobile, isIPad13 } from 'react-device-detect'
import i18n from '../data/i18n.yml'

export default class Footer extends Component {
    state = {
        modal: false
    }

    toggle = () => this.setState({ modal: !this.state.modal })

    render() {
        const { lang, fullMap, fullPlot, fullTree } = this.props
        if (fullMap || fullPlot || fullTree) return <div />

        return (
            <Fragment>
                <div className="footer">
                    <span>
                        <a href="https://yachaydata.cl/">YachayData</a> 2020
                    </span>
                    <FaInfoCircle
                        data-tip={!(isMobile || isIPad13) ? i18n.ABOUT[lang] : null}
                        size={18}
                        onClick={() => this.setState({ modal: true })}
                    />
                    <FaGithub
                        data-tip={!(isMobile || isIPad13) ? i18n.SOURCE_CODE[lang] : null}
                        size={18}
                        onClick={() => window.open('https://github.com/YachayData/mapacovid.cl')}
                    />
                </div>
                <Modal isOpen={this.state.modal} centered={true} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{i18n.ABOUT[lang]}</ModalHeader>
                    <ModalBody className="footer-about">
                        <div dangerouslySetInnerHTML={{ __html: i18n.ABOUT_TEXT[lang] }} />
                        <a
                            className="bmc-button"
                            target="_blank"
                            href="https://yachaydata.cl/"
                            rel="noopener noreferrer"
                        >
                            <span style={{ marginLeft: 75, fontSize: 19 }}>Yachay Data</span>
                        </a>
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}
