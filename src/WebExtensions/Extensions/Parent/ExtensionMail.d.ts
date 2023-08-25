import {ExtensionData} from '../ExtensionData';
import {AddressBookManager} from './AddressBookManager';
import {FolderManager} from './FolderManager';
import {MessageManager} from './MessageManager';

/**
 * ExtensionMail
 *
 * @see https://searchfox.org/comm-central/source/mail/components/extensions/parent/ext-mail.js#2854
 */
export interface ExtensionMail extends ExtensionData {

    /**
     * folderManager
     */
    folderManager: FolderManager;

    /**
     * addressBookManager
     */
    addressBookManager: AddressBookManager;

    /**
     * messageManager
     */
    messageManager: MessageManager;

    tabManager: any;

    windowManager: any;
}