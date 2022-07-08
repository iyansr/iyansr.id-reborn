#!/usr/bin/env bash

# ------------------------------------------------------------------------------
#
# Program: initpost.sh
# Author: Vitor Britto
# Inspored by: Gading Nasution.
# Modified by: Iyan Saputra.
# Description: script to create an initial structure for my posts.
#
# Usage: ./initpost.sh [options] <post name>
#
# Options:
#   -h, --help        output instructions
#   -c, --create      create post
#
# Alias: alias ipost="bash ~/path/to/script/initpost.sh"
#
# Example:
#   ./initpost.sh -c How to replace strings with sed
#
# Important Notes:
#   - This script was created to generate new markdown files for my blog.
#
# ------------------------------------------------------------------------------

# ------------------------------------------------------------------------------
# | VARIABLES                                                                  |
# ------------------------------------------------------------------------------

# CORE: Do not change these lines
# ----------------------------------------------------------------
CURRENT_DATE="$(date +'%Y-%m-%d')"
# TIME=$(date +"%T")
# ----------------------------------------------------------------


# SETTINGS: your configuration goes here
# ----------------------------------------------------------------

# Set your destination folder
BINPATH=$(cd `dirname $0`; pwd)
SRCPATH="${BINPATH}"
POSTPATH="${SRCPATH}/data/blog"

if [[ "${1}" == "-c" || "${1}" == "--create" ]]; then
    POST_TITLE="${@:2:$(($#-1))}"
    POST_NAME="$(echo ${@:2:$(($#-1))} | sed -e 's/ /-/g' | sed "y/ABCDEFGHIJKLMNOPQRSTUVWXYZ/abcdefghijklmnopqrstuvwxyz/")"
    DIST_FOLDER="$POSTPATH"
    FILE_NAME="${POST_NAME}.mdx"
    SLUG_NAME_EN="\"${POST_NAME}\""
    SLUG_NAME_ID="null"
fi


# ----------------------------------------------------------------



# ------------------------------------------------------------------------------
# | UTILS                                                                      |
# ------------------------------------------------------------------------------

# Header logging
e_header() {
    printf "$(tput setaf 38)→ %s$(tput sgr0)\n" "$@"
}

# Success logging
e_success() {
    printf "$(tput setaf 76)✔ %s$(tput sgr0)\n" "$@"
}

# Error logging
e_error() {
    printf "$(tput setaf 1)✖ %s$(tput sgr0)\n" "$@"
}

# Warning logging
e_warning() {
    printf "$(tput setaf 3)! %s$(tput sgr0)\n" "$@"
}



# ------------------------------------------------------------------------------
# | MAIN FUNCTIONS                                                             |
# ------------------------------------------------------------------------------

# Everybody need some help
initpost_help() {

cat <<EOT
------------------------------------------------------------------------------
INIT POST - A shortcut to create an initial structure for my posts.
------------------------------------------------------------------------------
Usage: ./post.sh [options] <post name>
Options:
    -h, --help        output instructions
    -c, --create      create post
Example:
    ./post.sh -c How to replace strings with sed
Important Notes:
    - This script was created to generate new text files to my blog.
Copyright (c) Vitor Britto './initpost.sh' (Modified by Sutan Nst.)
Licensed under the MIT license.
------------------------------------------------------------------------------
EOT

}

# Initial Content
initpost_content() {
    echo "---"
    echo "title: ${POST_TITLE}"
    echo "description: ${POST_TITLE}"
    echo "thumbnail: 'https://ik.imagekit.io/iyansr/Iyan_s_Web/posts/array-slice-v-s-splice-once-and-for-all/header_DOP1I6aCY.jpg'"
    echo "keyword: random"
    echo "date: '${CURRENT_DATE}'"
    echo "tags: ['random']"
    echo "---"
    echo ""
    echo "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
}

# Create post
initpost_file() {
    if [ ! -f "$FILE_NAME" ]; then
        e_header "Creating template..."
        echo "dist: $DIST_FOLDER/$FILE_NAME"
        initpost_content > "${DIST_FOLDER}/${FILE_NAME}"
        e_success "Initial post successfully created!"
    else
        e_warning "File already exist."
        exit 1
    fi

}

# ------------------------------------------------------------------------------
# | INITIALIZE PROGRAM                                                         |
# ------------------------------------------------------------------------------

main() {

    # Show help
    if [[ "${1}" == "-h" || "${1}" == "--help" ]]; then
        initpost_help ${1}
        exit
    fi

    # Create post
    if [[ "${1}" == "-c" || "${1}" == "--create" ]]; then
        initpost_file $*
        exit
    fi
}

# Initialize
main $*