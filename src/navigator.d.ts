interface Navigator {
    keyboard?: {
        getLayoutMap?: () => Promise<Map<string, string>>
        addEventListener?: (eventName: string, callback: (event: Event) => void) => void
    }
}
